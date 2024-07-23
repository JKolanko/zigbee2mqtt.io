"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[54444],{36516:(e,t,o)=>{o.r(t),o.d(t,{data:()=>n});const n=JSON.parse('{"key":"v-3dd8fef0","path":"/devices/WXCJKG12LM.html","title":"Aqara WXCJKG12LM control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Aqara WXCJKG12LM control via MQTT","description":"Integrate your Aqara WXCJKG12LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2019-12-15T17:27:48.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing Instructions","slug":"pairing-instructions","link":"#pairing-instructions","children":[]},{"level":3,"title":"Binding","slug":"binding","link":"#binding","children":[]},{"level":3,"title":"Battery Replacement","slug":"battery-replacement","link":"#battery-replacement","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Operation mode (enum)","slug":"operation-mode-enum","link":"#operation-mode-enum","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1721759454000},"filePathRelative":"devices/WXCJKG12LM.md"}')},753451:(e,t,o)=>{o.r(t),o.d(t,{default:()=>g});var n=o(166252);const d=(0,n._)("h1",{id:"aqara-wxcjkg12lm",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#aqara-wxcjkg12lm","aria-hidden":"true"},"#"),(0,n.Uk)(" Aqara WXCJKG12LM")],-1),i=(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th"),(0,n._)("th")])],-1),a=(0,n._)("tr",null,[(0,n._)("td",null,"Model"),(0,n._)("td",null,"WXCJKG12LM")],-1),r=(0,n._)("td",null,"Vendor",-1),l=(0,n._)("tr",null,[(0,n._)("td",null,"Description"),(0,n._)("td",null,"Opple wireless switch (double band)")],-1),c=(0,n._)("tr",null,[(0,n._)("td",null,"Exposes"),(0,n._)("td",null,"battery, voltage, operation_mode, action, linkquality")],-1),s=(0,n._)("tr",null,[(0,n._)("td",null,"Picture"),(0,n._)("td",null,[(0,n._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/WXCJKG12LM.png",alt:"Aqara WXCJKG12LM"})])],-1),u=(0,n.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing-instructions" tabindex="-1"><a class="header-anchor" href="#pairing-instructions" aria-hidden="true">#</a> Pairing Instructions</h3><p>Press and hold the button on the backside of the device until the blue light starts blinking; release it, and the pairing should begin.</p><h3 id="binding" tabindex="-1"><a class="header-anchor" href="#binding" aria-hidden="true">#</a> Binding</h3>',4),h={href:"https://www.zigbee2mqtt.io/guide/usage/binding.html",target:"_blank",rel:"noopener noreferrer"},p=(0,n.uE)('<p>Note that this device can only be bound to one device or group at a time.</p><p>For proper commands, you will need to change the operation mode of the device; by default, it is in <code>event</code> mode, but when binding, we need to change it to <code>command</code> mode. To do this, send the <code>{&quot;operation_mode&quot;: &quot;command&quot;}</code> payload to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> (or use the <code>operation_mode</code> parameter in the GUI). Right before doing this, make sure to wake up the device.</p><p>As the device is sleeping by default, you need to wake it up after sending the bind/unbind command by pressing the reset button once.</p><p>When endpoint <code>1</code> is bound to a light or a group of lights, the behavior is as follows (for a double band model):</p><table><thead><tr><th>Button</th><th>Click</th><th>Action</th><th>Comment</th></tr></thead><tbody><tr><td>Top left</td><td>Single<br>Double<br>Long</td><td>Turn off</td><td>Using the <code>commandOff</code> command.</td></tr><tr><td>Top right</td><td>Single<br>Double<br>Long</td><td>Turn on</td><td>Using the <code>commandOn</code> command.</td></tr><tr><td>Bottom left</td><td>Single</td><td>Step down the brightness</td><td>In steps of 85 points (33%), using the <code>step</code> command.</td></tr><tr><td>Bottom right</td><td>Single</td><td>Step up the brightness</td><td>In steps of 85 points (33%), using the <code>step</code> command.</td></tr><tr><td>Bottom left</td><td>Double</td><td>Step the color temperature down</td><td>In steps of 69 mired, using the <code>stepColorTemp</code> command.<br>I.e., make it warmer.</td></tr><tr><td>Bottom right</td><td>Double</td><td>Step the color temperature up</td><td>In steps of 69 mired, using the <code>stepColorTemp</code> command.<br>I.e., make it colder.</td></tr></tbody></table><h3 id="battery-replacement" tabindex="-1"><a class="header-anchor" href="#battery-replacement" aria-hidden="true">#</a> Battery Replacement</h3><p>All devices in the Opple line share the same internal design. First, you will need to remove the wireless switch part from its mount. Then use a long and thin object (preferably a plastic spudger, as the plastic is soft) to unclip the front button(s) from the frame by reaching underneath and carefully prying up. For the triple-band model, removing the side buttons will help with the center one. After removing buttons, the black frame must be unscrewed using a small Phillips screwdriver and then unclipped from the device case on the sides. When the logic board is exposed, simply remove it and turn it upside down, where a <strong>single CR2032</strong> battery is located. Be careful with the logic board removed, as it also holds a small pairing button in place on the other side.</p>',7),m=(0,n.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="operation-mode-enum" tabindex="-1"><a class="header-anchor" href="#operation-mode-enum" aria-hidden="true">#</a> Operation mode (enum)</h3><p>Operation mode, select &quot;command&quot; to enable bindings (wake up the device before changing modes!). Value can be found in the published state on the <code>operation_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;operation_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;operation_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>command</code>, <code>event</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>button_1_hold</code>, <code>button_1_release</code>, <code>button_1_single</code>, <code>button_1_double</code>, <code>button_1_triple</code>, <code>button_2_hold</code>, <code>button_2_release</code>, <code>button_2_single</code>, <code>button_2_double</code>, <code>button_2_triple</code>, <code>button_3_hold</code>, <code>button_3_release</code>, <code>button_3_single</code>, <code>button_3_double</code>, <code>button_3_triple</code>, <code>button_4_hold</code>, <code>button_4_release</code>, <code>button_4_single</code>, <code>button_4_double</code>, <code>button_4_triple</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',11),b={},g=(0,o(983744).Z)(b,[["render",function(e,t){const o=(0,n.up)("RouterLink"),b=(0,n.up)("ExternalLinkIcon");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.kq)(" !!!! "),(0,n.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,n.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,n.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,n.kq)(" !!!! "),d,(0,n._)("table",null,[i,(0,n._)("tbody",null,[a,(0,n._)("tr",null,[r,(0,n._)("td",null,[(0,n.Wm)(o,{to:"/supported-devices/#v=Aqara"},{default:(0,n.w5)((()=>[(0,n.Uk)("Aqara")])),_:1})])]),l,c,s])]),(0,n.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),u,(0,n._)("p",null,[(0,n.Uk)("By default, the device is bound to the coordinator, but it can also be used to directly control other lights and switches in the network (see "),(0,n._)("a",h,[(0,n.Uk)("guide on binding"),(0,n.Wm)(b)]),(0,n.Uk)(").")]),p,(0,n.kq)(" Notes END: Do not edit below this line "),m])}]])}}]);