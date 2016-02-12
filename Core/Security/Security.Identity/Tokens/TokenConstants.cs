using Support;
using System;
using System.Security.Cryptography;

namespace Security.Identity.Tokens
{
    internal sealed class TokenConstants
    {
        private const string key = "YQBiAGMAZABlAGYAZwBoAGkAagBrAGwAbQBuAG8AcABxAHIAcwB0AHUAdgB3AHgAeQB6ADAAMQAyADMANAA1AA==";
        public static readonly byte[] TokenKey = null;
        public static readonly string TokenIssuer = "";
        public static readonly string TokenAudience = "";
        public static readonly int TokenLifetimeInMinutes = 0;

        static TokenConstants()
        {
            TokenKey = Convert.FromBase64String(key);
            TokenIssuer = "Security.Service";
            TokenAudience = "http://localhost:81/";
            TokenLifetimeInMinutes = Convert.ToInt32(Configuration.GetConfig("expiry"));

            //RNGCryptoServiceProvider crypto = new RNGCryptoServiceProvider();
            //crypto.GetNonZeroBytes(TokenKey);
        }
    }
}