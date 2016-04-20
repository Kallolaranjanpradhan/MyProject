using MyProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MyProject.Controllers
{
    public class MyHomeController : Controller
    {
        // GET: MyHome
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Home()
        {
            return View();
        }

        public ActionResult Login()
        {
            return View();
        }
        
        [HttpGet]
        public ActionResult Register()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Register(Registration reg)
        {
            if(ModelState.IsValid)
            {
                return View("UserProfile",reg);
            }
            else
            {
                return View(reg);
            }
        }

        public ActionResult UserProfile()
        {
            return View();
        }
    }
}