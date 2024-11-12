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

   #This repo to show the way setup auto skip login:
   1. create authen.config.ts file
   2. create global-setup.ts file
   3. Edit hooks to get data from storage of file auth.config.ts (this file get session from  path.join(process.cwd(), 'playwright/.auth/admin.json'))
   4. update package.json to add "auth:setup": "cross-env NODE_OPTIONS=\"--loader ts-node/esm\" node global-setup.ts" into script
   5. update playwright.config.ts - add globalSetup: require.resolve('./global-setup.ts'),  and storageState: path.join(process.cwd(), 'playwright/.auth/admin.json'),
   6. install ts node by run npm install --save-dev ts-node
   7. run step 4