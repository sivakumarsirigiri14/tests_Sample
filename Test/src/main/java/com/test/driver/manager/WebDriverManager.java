package com.test.driver.manager;

import java.io.File;
import java.net.MalformedURLException;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.remote.RemoteWebDriver;

import com.test.configutils.ConfigUtils;

public class WebDriverManager {

	
	public static RemoteWebDriver getDriverDynamic() throws MalformedURLException {
		String defaultBrowser = ConfigUtils.getASpecificProperty("browser");

		RemoteWebDriver driver = null;
		if (defaultBrowser.equals("firefox") || defaultBrowser.equals("ff")) {

			// set driver properties
			FirefoxProfile profile = new FirefoxProfile();
			profile.setPreference("javascript.enabled", true);
			profile.setEnableNativeEvents(true);
			driver = new FirefoxDriver(profile);
			driver.manage().window().maximize();
			driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		} 		
		return driver;
	}

}
