﻿using System;
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
                new {Id = 2 , Label = "Forms", CssIcon = "glyphicon-plus", Route = "#/forms"},
                new {Id = 3 , Label = "Grid", CssIcon = "glyphicon-th-list", Route = "#/grid"},
                new {Id = 4 , Label = "Tabs", CssIcon = "glyphicon-folder-open", Route = "#/tab"},
                new {Id = 5 , Label = "Popups", CssIcon = "glyphicon-magnet", Route = "#/popup"},
                new {Id = 6 , Label = "Badge", CssIcon = "glyphicon-envelope", Route = "#/badge"},
                new {Id = 7 , Label = "Button", CssIcon = "glyphicon-play-circle", Route = "#/button"},
                new {Id = 8 , Label = "Breadcrumbs", CssIcon = "glyphicon glyphicon-tasks", Route = "#/breadcrumbs"}
            }, JsonRequestBehavior.AllowGet);
        }
    }
}
