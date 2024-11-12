# internal:

This is a sample automation framework using Playwright,Cucumber and Typescript.(Following structure with POM)

1. Clone the repository to your local machine:
   git clone 
2. Open the project folder in Visual Studio Code:
   cd internal

3. Install following packages
   npm install

4. run test by 2 command
   npx playwright test : to generate session and save to  path.join(process.cwd(), 'playwright/.auth/admin.json')
   npm test : to run all testcase