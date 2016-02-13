using System;
using System.Configuration;

namespace Support
{
    public static class Configuration
    {
        public static string GetConfig(string key)
        {
            return ConfigurationManager.AppSettings[key].ToString().Trim();
        }

    }
}