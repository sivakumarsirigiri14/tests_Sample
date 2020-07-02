package com.tenten.runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;


@RunWith(Cucumber.class)
@CucumberOptions(format = { "pretty", "html:target/cucumber-html-report","json:target/basicreport.json" }, 
		glue = { "com.tenten.steps" },
		//dryRun=true,
		features = { "classpath:featureFiles/"}
        ,monochrome=true
)


public class TestRunner {
	//This is just a runner
	
}
