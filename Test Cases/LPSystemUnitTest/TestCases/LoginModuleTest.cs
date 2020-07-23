using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Support.UI;
using LPSystemUnitTest.Utilities;

namespace LPSystemUnitTest.TestCases
{
    [TestClass]
    public class LoginModuleTest : BaseTest
    {
        [TestMethod]
        public void InvalidEmailTest()
        {
            Browser.driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            Browser.driver.FindElement(By.XPath("//input[@id='useremail']")).SendKeys("Test@");
            Browser.driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            //  Browser.driver.FindElement(By.XPath("//button[text()='Login']")).Click();
            Thread.Sleep(5000);
            bool result = Browser.driver.FindElement(By.XPath("//span[text()=' *enter a valid email ']")).Displayed;
            // Console.WriteLine(result);
            Assert.IsTrue(result);
        }

        [TestMethod]
        public void InvalidLoginAlertTest()
        {
            Browser.driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            Browser.driver.FindElement(By.XPath("//input[@id='useremail']")).SendKeys("Test@gmail.com");
            Browser.driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            Browser.driver.FindElement(By.XPath("//input[@id='userpass']")).SendKeys("Test1234");
            Browser.driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            Thread.Sleep(3000);
            Browser.driver.FindElement(By.XPath("//button[text()='Login']")).Click();
            Thread.Sleep(4000);
            IAlert alert = Browser.driver.SwitchTo().Alert();
            string alerttxt = alert.Text;

            alert.Accept();
            Assert.AreEqual(alerttxt, "Couldn't find your account, register first");
        }
        [TestMethod]
        public void ValidLoginTestWithRegisteredUser()
        {
            Browser.driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            Browser.driver.FindElement(By.XPath("//input[@id='useremail']")).SendKeys("testvalid@gmail.com");
            Browser.driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            Browser.driver.FindElement(By.XPath("//input[@id='userpass']")).SendKeys("Testvalid@123");
            Browser.driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            Thread.Sleep(3000);
            Browser.driver.FindElement(By.XPath("//button[text()='Login']")).Click();
            Thread.Sleep(3000);
            IAlert loginalert = Browser.driver.SwitchTo().Alert();
            Thread.Sleep(2000);
            loginalert.Accept();
            Browser.driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            Thread.Sleep(3000);
            Browser.driver.FindElement(By.XPath("//a[text()='Logout ']")).Click();
            IAlert logoutalert = Browser.driver.SwitchTo().Alert();
            Thread.Sleep(2000);
            logoutalert.Accept();
        }
    }
}
