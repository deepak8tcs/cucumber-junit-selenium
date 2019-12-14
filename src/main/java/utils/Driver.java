package utils;

import java.util.concurrent.TimeUnit;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import utils.PropertyManager;

public class Driver {
	
	public static WebDriver driver=null;
	public static PropertyManager properties =PropertyManager.getInstance();


	public  static void initialize() {
		String browser = properties.getBrowserName().toLowerCase();
		if(driver==null)
		{
			if (browser.equals("firefox")) {
				System.setProperty("webdriver.gecko.driver", properties.getPropertyValue("webdriver.gecko.driver"));
				driver = new FirefoxDriver();

			} else if (browser.equals("chrome")) {
				System.setProperty("webdriver.chrome.driver", properties.getChromeDriverPath());
				driver = new ChromeDriver();

			} else if (browser.equals("ie")) {
				System.setProperty("webdriver.ie.driver", properties.getIEDriverPath());
				driver = new InternetExplorerDriver();
			}
			driver.manage().window().maximize();
			driver.manage().timeouts().implicitlyWait(properties.getImplicitTimeout(), TimeUnit.SECONDS);	
			loadApplication();

		}
	}
	
	public static WebDriver getDriver() {
		return driver;
	}
	
	public static void loadApplication()
	{
		driver.get(properties.getApplicationUrl());
	}
	

	public static void closeBrowser() {
		driver.close();
		driver=null;

	}
	public void quitBrowser() {
		driver.quit();
		driver=null;
	}
	
}
