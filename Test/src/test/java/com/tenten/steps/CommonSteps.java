package com.tenten.steps;
import java.net.MalformedURLException;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.remote.RemoteWebDriver;

import com.test.driver.manager.WebDriverManager;

public class CommonSteps {

	public static RemoteWebDriver driver;

	public CommonSteps() {
		if (driver == null) {
			try {
				driver = WebDriverManager.getDriverDynamic();
				driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
			} catch (MalformedURLException e) {
				e.printStackTrace();
			}
		}
	}

}