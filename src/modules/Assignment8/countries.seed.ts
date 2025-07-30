import { CountryModel } from '../../models/Country.model';


const countries = [
  { name: 'India', code: 'IN' },
  { name: 'Australia', code: 'AU' },
  { name: 'England', code: 'ENG' },
  { name: 'Pakistan', code: 'PAK' },
  { name: 'South Africa', code: 'SA' },
  { name: 'New Zealand', code: 'NZ' },
  { name: 'Sri Lanka', code: 'SL' },
  { name: 'Bangladesh', code: 'BAN' },
  { name: 'Afghanistan', code: 'AFG' },
  { name: 'West Indies', code: 'WI' },
];

export const seedCountries = async (): Promise<{ message: string }> => {
  try {
    const existingCount = await CountryModel.countDocuments();
    if (existingCount > 0) {
      return { message: 'Countries already seeded' };
    }

    await CountryModel.insertMany(countries);
    return { message: 'Countries seeded successfully' };
  } catch (error) {
    throw new Error('Seeding countries failed: ' + (error as Error).message);
  }
};
