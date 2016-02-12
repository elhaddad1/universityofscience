using System;

namespace Security.Identity.Tokens
{
    public sealed class Token
    {
        public string Value { get; set; }
        public int Expiry { get; set; }
        public string User { get; set; }
        public string Perms { get; set; }

        public string Pages { get; set; }
        public Token()
        {
        }
    }
}