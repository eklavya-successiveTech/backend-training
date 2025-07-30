import { Request, Response, NextFunction } from 'express';
import geoip from 'geoip-lite';
import Joi from 'joi';

export class GeoValidationMiddleware {
  static allowOnlyFromCountry(allowedCountryCode: string) {
    return (req: Request, res: Response, next: NextFunction) => {
      const manualIp = req.query.ip as string;

      if (manualIp) {
        const schema = Joi.string().ip({ version: 'ipv4', cidr: 'forbidden' });
        const { error } = schema.validate(manualIp);

        if (error) {
          return res.status(400).json({ error: `Invalid test IP address: ${error.message}` });
        }
      }

      const realIp = manualIp || req.ip || req.connection.remoteAddress || '';
      const normalizedIp = realIp === '::1' ? '103.21.77.15' : realIp;

      const geo = geoip.lookup(normalizedIp);

      if (!geo) {
        return res.status(403).json({ error: 'Could not determine your location' });
      }

      if (geo.country !== allowedCountryCode.toUpperCase()) {
        return res.status(403).json({
          error: `Access denied: only requests from ${allowedCountryCode} are allowed`,
          detectedCountry: geo.country,
          ip: normalizedIp
        });
      }
      next();
    };
  }
}
