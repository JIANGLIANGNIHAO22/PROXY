function FindProxyForURL(url,host) {

   if (
      isPlainHostName(host) 
      ) return "DIRECT;";

   else {

	  // YO proxy
	  if (
		 shExpMatch(host, "129.24.*.*")
         ) {
            return "PROXY 127.0.0.1:13129;";
      }
      // YRP proxy 
	  else if (
		 shExpMatch(host, "192.168.125.*") ||
		 shExpMatch(host, "129.152.76.*") 
         ) {
            return "PROXY 127.0.0.1:9002;";
      }
	  // Google
	  else if (
		 shExpMatch(host, "*.google.*") ||
		 shExpMatch(host, "*.bbc.*") ||
		 shExpMatch(host, "*.github.*") 
         ) {
            return "PROXY www-proxy.ericsson.se:8080;";
      }
      else {
         return "DIRECT;";
      }
   }
}
