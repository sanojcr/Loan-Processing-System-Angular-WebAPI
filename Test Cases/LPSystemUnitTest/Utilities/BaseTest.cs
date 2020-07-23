using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace LPSystemUnitTest.Utilities
{
    public class BaseTest
    {
        [TestInitialize]
        public void BeforeTest()
        {
            Browser.GetBrowser();
        }
        [TestCleanup]
        public void AfterTest()
        {
            Browser.CloseBrowser();
        }
    }
}
