using Repository.Entity;
using System;
using System.Collections.Generic;
using System.IdentityModel.Protocols.WSTrust;
using System.IdentityModel.Tokens;
using System.Security.Claims;
using System.ServiceModel.Security.Tokens;
using System.Web;
using System.Web.Caching;

namespace Security.Identity.Tokens
{
    public sealed class TokenManager
    {
        public static Token CreateToken(SystemUser user, string perms,string pages)
        {
            var claims = new List<Claim>()
                {
                    new Claim(ClaimTypes.UserData, user.Id.ToString()),
                    new Claim(ClaimTypes.PrimarySid, user.Id.ToString()),
                    new Claim(ClaimTypes.Sid, user.Id.ToString()),
                    new Claim(ClaimTypes.Name, user.FullName.ToString())
                };
            var key = new InMemorySymmetricSecurityKey(TokenConstants.TokenKey);
            var jwt = new JwtSecurityTokenHandler() { TokenLifetimeInMinutes = TokenConstants.TokenLifetimeInMinutes };
            var token = jwt.CreateToken(CreateSecurityTokenDescriptor(claims, key));
           
            return new Token() { Value = jwt.WriteToken(token), Expiry = TokenConstants.TokenLifetimeInMinutes, User = user.FullName, Perms = perms,Pages=pages };
        }

        public static ClaimsPrincipal ReadToken(string token, out SecurityToken _token)
        {
            TokenValidationParameters _params = new TokenValidationParameters()
                {
                    ValidateIssuer = true,
                    ValidIssuer = TokenConstants.TokenIssuer,
                    ValidAudience = TokenConstants.TokenAudience,
                    IssuerSigningToken = new BinarySecretSecurityToken(TokenConstants.TokenKey),
                };
            _token = null;
            var jwt = new JwtSecurityTokenHandler() { TokenLifetimeInMinutes = TokenConstants.TokenLifetimeInMinutes };
            return jwt.ValidateToken(token, _params, out _token);
        }

        private static SecurityTokenDescriptor CreateSecurityTokenDescriptor(List<Claim> claims, InMemorySymmetricSecurityKey key)
        {
            return new SecurityTokenDescriptor
            {
                TokenIssuerName = TokenConstants.TokenIssuer,
                AppliesToAddress = TokenConstants.TokenAudience,
                Lifetime = new Lifetime(DateTime.UtcNow, DateTime.UtcNow.AddMinutes(TokenConstants.TokenLifetimeInMinutes)),
                Subject = new ClaimsIdentity(claims.ToArray()),
                SigningCredentials = new SigningCredentials(key,
                    "http://www.w3.org/2001/04/xmldsig-more#hmac-sha256",
                    "http://www.w3.org/2001/04/xmlenc#sha256"),
            };
        }
    }
}