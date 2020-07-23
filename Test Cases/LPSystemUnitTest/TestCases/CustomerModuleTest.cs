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
    public class CustomerModuleTest : BaseTest
    {
        [TestMethod]
        public void RegisterUserandValidLogin()
        {
            Browser.driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            Browser.driver.FindElement(By.XPath("//a[text()='Make Loan']")).Click();
            Browser.driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            Browser.driver.FindElement(By.Id("username")).SendKeys("Demo Test");
            // Browser.driver.FindElement(By.Id("useremail")).SendKeys("demo@gmail.com");
            Browser.driver.FindElement(By.Id("useremail")).SendKeys("demo@gmail.com");
            SelectElement select = new SelectElement(Browser.driver.FindElement(By.Id("usergender")));
            Thread.Sleep(2000);
            select.SelectByText("Male");
            Browser.driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            Browser.driver.FindElement(By.Id("userpass")).SendKeys("Demo@123");
            Browser.driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            Browser.driver.FindElement(By.Id("usermob")).SendKeys("9876512345");
            Browser.driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            Browser.driver.FindElement(By.Id("useradhaar")).SendKeys("865385626325");
            Browser.driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            Thread.Sleep(2000);

            //SelectElement loanselect = new SelectElement(Browser.driver.FindElement(By.Id("loantype")));
            Thread.Sleep(2000);
            //loanselect.SelectByText("Bike Loan ");
            SelectElement selectElementLoantype = new SelectElement(Browser.driver.FindElement(By.Id("loantype")));
            Thread.Sleep(2000);
            selectElementLoantype.SelectByValue("11");
            // select.SelectByValue("19");
            Browser.driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            /* Browser.driver.FindElement(By.Id("loanamt")).SendKeys("50000");*/
            Thread.Sleep(3000);
            Browser.driver.FindElement(By.XPath("//button[text()='Apply']")).Click();
            Thread.Sleep(2000);
            IAlert logoutalert = Browser.driver.SwitchTo().Alert();
            Thread.Sleep(2000);
            logoutalert.Accept();
        }

        [TestMethod]
        public void RegisteredUserApplyingOneMoreLoanTest()
        {
            Browser.driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            Browser.driver.FindElement(By.XPath("//input[@id='useremail']")).SendKeys("demo@gmail.com");
            Browser.driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            Browser.driver.FindElement(By.XPath("//input[@id='userpass']")).SendKeys("Demo@123");
            Browser.driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            Thread.Sleep(3000);
            Browser.driver.FindElement(By.XPath("//button[text()='Login']")).Click();
            Thread.Sleep(4000);
            IAlert loginalert = Browser.driver.SwitchTo().Alert();
            Thread.Sleep(2000);
            loginalert.Accept();
            Browser.driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            Browser.driver.FindElement(By.XPath("//a[text()='View Loan']")).Click();
            Browser.driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            Thread.Sleep(3000);

            Browser.driver.FindElement(By.XPath("//button[text()='Make Loan']")).Click();
            Browser.driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            Browser.driver.FindElement(By.Id("usermob")).SendKeys("9876512345");
            Browser.driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            Browser.driver.FindElement(By.Id("useradhaar")).SendKeys("865385626325");
            Browser.driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            Thread.Sleep(2000);

            SelectElement selectElementLoantype = new SelectElement(Browser.driver.FindElement(By.Id("loantype")));
            selectElementLoantype.SelectByValue("13");

            Browser.driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            /* Browser.driver.FindElement(By.Id("loanamt")).SendKeys("70000");*/
            Thread.Sleep(3000);
            Browser.driver.FindElement(By.XPath("//button[text()='Apply']")).Click();
            Thread.Sleep(2000);
            IAlert Successalert = Browser.driver.SwitchTo().Alert();
            Thread.Sleep(2000);
            Successalert.Accept();
            Browser.driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            Browser.driver.FindElement(By.XPath("//a[text()='Logout ']")).Click();
            Thread.Sleep(2000);
            IAlert logoutalert = Browser.driver.SwitchTo().Alert();
            Thread.Sleep(2000);
            logoutalert.Accept();
        }
    }
}
