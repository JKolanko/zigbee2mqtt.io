"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[37683],{547187:(e,n,i)=>{i.r(n),i.d(n,{data:()=>s});const s=JSON.parse('{"key":"v-72e2d442","path":"/guide/configuration/frontend.html","title":"Frontend","lang":"en-US","frontmatter":{"pageClass":"content-page","sidebarDepth":1},"excerpt":"","headers":[{"level":2,"title":"Advanced configuration","slug":"advanced-configuration","link":"#advanced-configuration","children":[]},{"level":2,"title":"Nginx proxy configuration","slug":"nginx-proxy-configuration","link":"#nginx-proxy-configuration","children":[]},{"level":2,"title":"Apache2 proxy configuration","slug":"apache2-proxy-configuration","link":"#apache2-proxy-configuration","children":[]}],"git":{"updatedTime":1721759454000},"filePathRelative":"guide/configuration/frontend.md"}')},922270:(e,n,i)=>{i.r(n),i.d(n,{default:()=>f});var s=i(166252);const a=i.p+"assets/img/frontend.e604ec0e.png",t=(0,s._)("h1",{id:"frontend",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#frontend","aria-hidden":"true"},"#"),(0,s.Uk)(" Frontend")],-1),o={class:"custom-container tip"},l=(0,s._)("p",{class:"custom-container-title"},"TIP",-1),r={href:"https://github.com/Koenkk/zigbee2mqtt/issues/4266",target:"_blank",rel:"noopener noreferrer"},d=(0,s.uE)('<p>Zigbee2MQTT has a built-in web-based frontend.</p><p><img src="'+a+'" alt="Frontend"></p><p>To enable the frontend add the following to your <code>configuration.yaml</code>. This will start the frontend on port <code>8080</code>.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">frontend</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="advanced-configuration" tabindex="-1"><a class="header-anchor" href="#advanced-configuration" aria-hidden="true">#</a> Advanced configuration</h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">frontend</span><span class="token punctuation">:</span>\n  <span class="token comment"># Optional, default 8080</span>\n  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8080</span>\n  <span class="token comment"># Optional, empty by default to listen on both IPv4 and IPv6. Opens a unix socket when given a path instead of an address (e.g. &#39;/run/zigbee2mqtt/zigbee2mqtt.sock&#39;)</span>\n  <span class="token comment"># Don&#39;t set this if you use Docker or the Home Assistant add-on unless you&#39;re sure the chosen IP is available inside the container</span>\n  <span class="token key atrule">host</span><span class="token punctuation">:</span> 0.0.0.0\n  <span class="token comment"># Optional, enables authentication, disabled by default, cleartext (no hashing required)</span>\n  <span class="token key atrule">auth_token</span><span class="token punctuation">:</span> your<span class="token punctuation">-</span>secret<span class="token punctuation">-</span>token\n  <span class="token comment"># Optional, url on which the frontend can be reached, currently only used for the Home Assistant device configuration page</span>\n  <span class="token key atrule">url</span><span class="token punctuation">:</span> <span class="token string">&#39;https://zigbee2mqtt.myhouse.org&#39;</span>\n  <span class="token comment"># Optional, certificate file path for exposing HTTPS. The sibling property &#39;ssl_key&#39; must be set for HTTPS to be activated</span>\n  <span class="token key atrule">ssl_cert</span><span class="token punctuation">:</span> /config/etc/letsencrypt/live/mydomain.com/fullchain.pem\n  <span class="token comment"># Optional, private key file path for exposing HTTPS. The sibling property &#39;ssl_cert&#39; must be set for HTTPS to be activated</span>\n  <span class="token key atrule">ssl_key</span><span class="token punctuation">:</span> /config/etc/letsencrypt/live/mydomain.com/privkey.pem\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To specify the <code>auth_token</code> in a different file set e.g. <code>auth_token: &#39;!secret.yaml auth_token&#39;</code>, create a file called <code>secret.yaml</code> next to <code>configuration.yaml</code> with content <code>auth_token: super-secret-token</code>.</p><p><strong>NOTE:</strong> If you are running Zigbee2MQTT via the Home Assistant addon you cannot change the port. The addon will force the frontend to run on port 8099 as Home Assistant Ingress requires this.</p><h2 id="nginx-proxy-configuration" tabindex="-1"><a class="header-anchor" href="#nginx-proxy-configuration" aria-hidden="true">#</a> Nginx proxy configuration</h2><p>In case you want to run the frontend behind a proxy you can use the following config as an example.</p>',10),c={href:"https://bugs.webkit.org/show_bug.cgi?id=80362",target:"_blank",rel:"noopener noreferrer"},u=(0,s._)("em",null,"all",-1),v=(0,s._)("code",null,"auth_token",-1),p=(0,s._)("code",null,"auth_basic",-1),m=(0,s.uE)('<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {\n    listen       80;\n    server_name  zigbee2mqtt.mydomain.com;\n    return 301   https://zigbee2mqtt.mydomain.com$request_uri;\n}\n\nserver {\n    listen      443 ssl http2;\n    listen      [::]:443 ssl http2;\n\n    # In case you want to use basic authentication:\n    auth_basic &quot;Login&quot;;\n    auth_basic_user_file /zigbee2mqtt_htpasswd;\n\n    ssl_certificate     /config/etc/letsencrypt/live/mydomain.com/fullchain.pem;\n    ssl_certificate_key /config/etc/letsencrypt/live/mydomain.com/privkey.pem;\n\n    server_name zigbee2mqtt.mydomain.com;\n\n    location / {\n        proxy_pass http://localhost:8080/;\n        proxy_set_header Host $host;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n    }\n\n    location /api {\n        proxy_pass         http://localhost:8080/api;\n        proxy_set_header Host $host;\n\n        proxy_http_version 1.1;\n        proxy_set_header Upgrade $http_upgrade;\n        proxy_set_header Connection &quot;upgrade&quot;;\n    }\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="apache2-proxy-configuration" tabindex="-1"><a class="header-anchor" href="#apache2-proxy-configuration" aria-hidden="true">#</a> Apache2 proxy configuration</h2>',2),b={href:"https://stackoverflow.com/questions/38838567/proxy-websocket-wss-to-ws-apache/60506715#60506715",target:"_blank",rel:"noopener noreferrer"},h=(0,s.uE)('<p>Enable these modules using <code>a2enmod proxy proxy_wstunnel proxy_http rewrite</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;VirtualHost *:80&gt;\n   ServerName example.com\n   ServerAdmin info@example.com\n\n\n    ProxyRequests off \n    ProxyVia on      \n    RewriteEngine On \n\n    RewriteEngine On\n    RewriteCond %{HTTP:Connection} Upgrade [NC]\n    RewriteCond %{HTTP:Upgrade} websocket [NC]\n    RewriteRule /(.*) ws://localhost:8080/$1 [P,L]\n\n    ProxyPass               / http://localhost:8080/           \n    ProxyPassReverse        / http://localhost:8080/\n\n\n   &lt;Proxy *&gt;\n   Order deny,allow\n   Allow from all\n   &lt;/Proxy&gt;\n\n   ErrorLog ${APACHE_LOG_DIR}/company2-error.log\n   CustomLog ${APACHE_LOG_DIR}/company2-access.log combined\n\n&lt;/VirtualHost&gt;\n\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',2),g={},f=(0,i(983744).Z)(g,[["render",function(e,n){const i=(0,s.up)("ExternalLinkIcon");return(0,s.wg)(),(0,s.iD)("div",null,[t,(0,s._)("div",o,[l,(0,s._)("p",null,[(0,s.Uk)("Ongoing discussion about the frontend can be found "),(0,s._)("a",r,[(0,s.Uk)("here"),(0,s.Wm)(i)])])]),d,(0,s._)("p",null,[(0,s.Uk)("Due to "),(0,s._)("a",c,[(0,s.Uk)("WebKit Bug 80362"),(0,s.Wm)(i)]),(0,s.Uk)(", which prevents basic authentication from being used with WebSockets, the frontend will not work in WebKit-based browsers when this type of authentication is configured. This includes desktop Safari on Mac and "),u,(0,s.Uk)(" browsers and web views on iOS. To work around the issue, configure the frontend's "),v,(0,s.Uk)(" to configure application-level auth and remove "),p,(0,s.Uk)(" from the web server config.")]),m,(0,s._)("p",null,[(0,s.Uk)("Credit: "),(0,s._)("a",b,[(0,s.Uk)("Florian Metzger-Noel"),(0,s.Wm)(i)])]),h])}]])}}]);