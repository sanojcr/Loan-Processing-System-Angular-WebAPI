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
    public class AdminModuleTest : BaseTest
    {
        [TestMethod]
        public void AdminValidLoginTest()
        {
            Browser.driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            Browser.driver.FindElement(By.XPath("//input[@id='useremail']")).SendKeys("admin@gmail.com");
            Browser.driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            Browser.driver.FindElement(By.XPath("//input[@id='userpass']")).SendKeys("Admin@123");
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
        [TestMethod]
        public void AdminAddingLoanTest()
        {
            Browser.driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            Browser.driver.FindElement(By.XPath("//input[@id='useremail']")).SendKeys("admin@gmail.com");
            Browser.driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            Browser.driver.FindElement(By.XPath("//input[@id='userpass']")).SendKeys("Admin@123");
            Browser.driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            Thread.Sleep(3000);
            Browser.driver.FindElement(By.XPath("//button[text()='Login']")).Click();
            Thread.Sleep(3000);
            IAlert loginalert = Browser.driver.SwitchTo().Alert();
            Thread.Sleep(2000);
            loginalert.Accept();
            Browser.driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            Browser.driver.FindElement(By.XPath("//a[text()='View Loan']")).Click();
            Browser.driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            Browser.driver.FindElement(By.XPath("//button[text()='Add Loan']")).Click();

            Browser.driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            Browser.driver.FindElement(By.Id("loantype")).SendKeys("Student Loan");

            Browser.driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            Browser.driver.FindElement(By.Id("loanamt")).SendKeys("210000");

            Browser.driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            Browser.driver.FindElement(By.Id("loanroi")).SendKeys("4.3");

            Browser.driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            Browser.driver.FindElement(By.Id("loanperiod")).SendKeys("4");
            Thread.Sleep(3000);
            Browser.driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            Browser.driver.FindElement(By.XPath("//button[text()='Submit']")).Click();

            Thread.Sleep(3000);
            IAlert addLoanAlert = Browser.driver.SwitchTo().Alert();
            Thread.Sleep(2000);
            loginalert.Accept();


            Browser.driver.FindElement(By.XPath("//a[text()='Logout ']")).Click();
            IAlert logoutalert = Browser.driver.SwitchTo().Alert();
            Thread.Sleep(2000);
            logoutalert.Accept();
        }
        [TestMethod]
        public void AdminAddingLoanInvalidDataTest()
        {
            Browser.driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            Browser.driver.FindElement(By.XPath("//input[@id='useremail']")).SendKeys("admin@gmail.com");
            Browser.driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            Browser.driver.FindElement(By.XPath("//input[@id='userpass']")).SendKeys("Admin@123");
            Browser.driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            Thread.Sleep(3000);
            Browser.driver.FindElement(By.XPath("//button[text()='Login']")).Click();
            Thread.Sleep(3000);
            IAlert loginalert = Browser.driver.SwitchTo().Alert();
            Thread.Sleep(2000);
            loginalert.Accept();
            Browser.driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            Browser.driver.FindElement(By.XPath("//a[text()='View Loan']")).Click();
            Browser.driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            Browser.driver.FindElement(By.XPath("//button[text()='Add Loan']")).Click();

            Browser.driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            Browser.driver.FindElement(By.Id("loantype")).SendKeys("Student Loan");

            Browser.driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            Browser.driver.FindElement(By.Id("loanamt")).SendKeys("25000");

            //Browser.driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            //Browser.driver.FindElement(By.Id("loanroi")).SendKeys("4.3");

            //Browser.driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            //Browser.driver.FindElement(By.Id("loanperiod")).SendKeys("4");
            Thread.Sleep(3000);
            Browser.driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            bool btnenabled = Browser.driver.FindElement(By.XPath("//button[text()='Submit']")).Enabled;
            Assert.IsFalse(btnenabled);

        }
    }
}
