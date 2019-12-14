#To run the scenarios
write click on "TestRunner" class and Run As "Junit Test"
or
write click on project folder and Run As "Maven Build.." give command clean test or clean install and run

#To check the HTML report
Go to test-output->index.html

#Points on Cucumber:

#Cucumber options:
1.features: path of feature files

2.glue: path of step definition files

3.format: to generate the report in different format like html,json,xml etc

monochrome=true: display the console output in proper readable format

 

4.dryRun=true :used to check whether mapping between feature file steps and step definition file steps is correct.

it wont run the test case, it will just let you know in the console what are missing steps to be implemented.

 

5.dryRun=false: will execute the test case

6.strict=true: it will strictly fail the related test case while executing if any particular step is undefined or pending

7. tags= {"@smoke,@regression"} : to run tagged scenarios. here comma acts as OR operator(most commonly used).

 

{"@smoke","@regression"}: here comma works as AND operator

tags= {"~@smoke","@regression"} : to ignore a particular tag

 

@smoke @regression

@e2e

@manual

Data driven testing with Examples keyword and without example keyword(using datatable)



parameters in steps


"austin" is on google home page //without examples ,data driven testing can be achieved without using examples .

we can use data tables with "Scenario"

 

"<user>" is on google home page //with examples

 

=====================

#Taking screenshots in cucumber:

 

Cucumber itself doesn’t provide functionality for taking screenshots, but it does make it possible to embed them in the report.

 

If we are using Selenium webdriver with Cucumber, Following is the command to take screenshot in Selenium:

// Selenium - Command to take screenshot

// Returns byte[]

((TakesScreenshot)driver).getScreenshotAs(OutputType.BYTES)

 

@After //cucumber hooks
public void tearDown(Scenario scenario) {

    if (scenario.isFailed()) {

      // Take a screenshot...

      final byte[] screenshot = ((TakesScreenshot) webDriver).getScreenshotAs(OutputType.BYTES);

   // embed it in the report.

      scenario.embed(screenshot, "image/png");

    }

}

 
