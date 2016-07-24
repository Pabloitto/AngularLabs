using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngularLab.WebSite.Controllers
{
    public class MainController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public JsonResult GetMenu()
        {
            return Json(new dynamic[]{
                new {Id = 1 , Label = "Home", CssIcon = "glyphicon-home", Route = "#/main"},  
                new {Id = 2 , Label = "Forms", CssIcon = "glyphicon-plus", Route = "#/forms"}
            }, JsonRequestBehavior.AllowGet);
        }
    }
}
