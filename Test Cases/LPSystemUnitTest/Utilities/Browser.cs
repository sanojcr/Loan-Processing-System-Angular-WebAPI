using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Firefox;
using OpenQA.Selenium.IE;

namespace LPSystemUnitTest.Utilities
{
    public class Browser
    {
        public static IWebDriver driver;
        public static void GetBrowser()
        {
            switch (Constants.BrowserType)
            {
                case "Chrome":
                    driver = new ChromeDriver();
                    driver.Url = Constants.URL;
                    driver.Manage().Window.Maximize();
                    Thread.Sleep(3000);
                    break;
                case "Firefox":
                    driver = new FirefoxDriver();
                    driver.Url = Constants.URL;
                    driver.Manage().Window.Maximize();
                    Thread.Sleep(3000);
                    break;
                case "InternetExplorerDriver":
                    driver = new InternetExplorerDriver();
                    driver.Url = Constants.URL;
                    driver.Manage().Window.Maximize();
                    Thread.Sleep(3000);
                    break;

                default:
                    driver = new ChromeDriver();
                    driver.Manage().Window.Maximize();
                    break;
            }
        }
        public static void CloseBrowser()
        {
            driver.Close();
            //try
            //{
            //    driver.Close();
            //}
            //catch(Exception e)
            //{
            //    driver.Close();
            //}
        }
    }
}
