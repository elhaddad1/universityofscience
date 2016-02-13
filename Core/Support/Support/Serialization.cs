using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;

namespace Support
{
    public static class Serialization
    {
        public static string SerializeObject(object value)
        {
            return JsonConvert.SerializeObject(value);
        }

        public static JToken SerializeObject(string json)
        {
            return JToken.Parse(json);
        }

        public static JToken SelectToken(JObject value, string path)
        {
            var data = value.SelectToken(path);
            return (data != null && data.HasValues ? data : null);
        }

        public static JArray ToArray(object content)
        {
            return new JArray(content);
        }

        public static T DeserializeObject<T>(string value)
        {
            return JsonConvert.DeserializeObject<T>(value);
        }                      
    }
}