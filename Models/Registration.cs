using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace MyProject.Models
{
    public class Registration
    {
        [Required(ErrorMessage = "Please enter your First Name")]
        [MinLength(2, ErrorMessage = "First Name must be more than 1 character")]
        [RegularExpression(@"^[A-Z a-z]+$", ErrorMessage = "Enter characters only")]
        public string FirstName { get; set; }

        [Required(ErrorMessage = "Please enter your Last Name")]
        [MinLength(2, ErrorMessage = "Last Name must be more than 1 character")]
        [RegularExpression(@"^[A-Z a-z]+$",ErrorMessage = "Enter characters only")]
        public string LastName { get; set; }

        [Required(ErrorMessage = "Please enter your Email")]
        [RegularExpression(@"^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}" +
                            @"\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\" +
                            @".)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$",
                            ErrorMessage = "Email is not valid")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Please enter your Email again")]
        [Compare("Email",ErrorMessage = "Not matching with above Email")]
        public string ConfirmEmail { get; set; }

        [Required(ErrorMessage = "Please Enter your Mobile Number")]
        [RegularExpression(@"^\d{10}$",ErrorMessage = "Please enter a 10 digit Mobile Number")]
        public string Mobile { get; set; }
        
        public string CityName { get; set; }

        public string AddressName { get; set; }

        [Required(ErrorMessage = "Please choose a UserId")]
        [Compare("Email", ErrorMessage = "UserId must be same as your Email")]
        public string UserID { get; set; }

        [Required(ErrorMessage = "Please choose a password")]
        public string Password { get; set; }

        [Required(ErrorMessage = "Please enter your password again")]
        [Compare("Password",ErrorMessage = "Not matching with your first Password")]
        public string ConfirmPassword { get; set; }
    }
}