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

const seedCountries = async () => {
  try {
    await CountryModel.insertMany(countries);
    console.log('Countries seeded successfully');

    process.exit(0);
  } catch (error) {
    console.error('Seeding failed:', error);
    process.exit(1);
  }
};

seedCountries();
