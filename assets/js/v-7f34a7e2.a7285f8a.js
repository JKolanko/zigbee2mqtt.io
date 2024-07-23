"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[91984],{390472:(e,t,i)=>{i.r(t),i.d(t,{data:()=>o});const o=JSON.parse('{"key":"v-7f34a7e2","path":"/devices/288WZ.html","title":"ONENUO 288WZ control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"ONENUO 288WZ control via MQTT","description":"Integrate your ONENUO 288WZ via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-11-30T19:41:12.000Z"},"excerpt":"","headers":[{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Smoke (binary)","slug":"smoke-binary","link":"#smoke-binary","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Silence (binary)","slug":"silence-binary","link":"#silence-binary","children":[]},{"level":3,"title":"Self test result (enum)","slug":"self-test-result-enum","link":"#self-test-result-enum","children":[]},{"level":3,"title":"Smoke state (enum)","slug":"smoke-state-enum","link":"#smoke-state-enum","children":[]},{"level":3,"title":"Sensitivity (enum)","slug":"sensitivity-enum","link":"#sensitivity-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1721759454000},"filePathRelative":"devices/288WZ.md"}')},228735:(e,t,i)=>{i.r(t),i.d(t,{default:()=>m});var o=i(166252);const s=(0,o._)("h1",{id:"onenuo-288wz",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#onenuo-288wz","aria-hidden":"true"},"#"),(0,o.Uk)(" ONENUO 288WZ")],-1),n=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th"),(0,o._)("th")])],-1),a=(0,o._)("tr",null,[(0,o._)("td",null,"Model"),(0,o._)("td",null,"288WZ")],-1),d=(0,o._)("td",null,"Vendor",-1),l=(0,o._)("tr",null,[(0,o._)("td",null,"Description"),(0,o._)("td",null,"Smoke detector")],-1),r=(0,o._)("tr",null,[(0,o._)("td",null,"Exposes"),(0,o._)("td",null,"smoke, battery, silence, self_test_result, smoke_state, sensitivity, linkquality")],-1),c=(0,o._)("tr",null,[(0,o._)("td",null,"Picture"),(0,o._)("td",null,[(0,o._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/288WZ.png",alt:"ONENUO 288WZ"})])],-1),u=(0,o.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="smoke-binary" tabindex="-1"><a class="header-anchor" href="#smoke-binary" aria-hidden="true">#</a> Smoke (binary)</h3><p>Indicates whether the device detected smoke. Value can be found in the published state on the <code>smoke</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> smoke is ON, if <code>false</code> OFF.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="silence-binary" tabindex="-1"><a class="header-anchor" href="#silence-binary" aria-hidden="true">#</a> Silence (binary)</h3><p>Silence the alarm. Value can be found in the published state on the <code>silence</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;silence&quot;: NEW_VALUE}</code>. If value equals <code>true</code> silence is ON, if <code>false</code> OFF.</p><h3 id="self-test-result-enum" tabindex="-1"><a class="header-anchor" href="#self-test-result-enum" aria-hidden="true">#</a> Self test result (enum)</h3><p>Result of the self-test. Value can be found in the published state on the <code>self_test_result</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>checking</code>, <code>success</code>, <code>failure</code>, <code>others</code>.</p><h3 id="smoke-state-enum" tabindex="-1"><a class="header-anchor" href="#smoke-state-enum" aria-hidden="true">#</a> Smoke state (enum)</h3><p>Possible states: alarm, normal, detecting, unknown. Value can be found in the published state on the <code>smoke_state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>alarm</code>, <code>normal</code>, <code>detecting</code>, <code>unknown</code>.</p><h3 id="sensitivity-enum" tabindex="-1"><a class="header-anchor" href="#sensitivity-enum" aria-hidden="true">#</a> Sensitivity (enum)</h3><p>Smoke detection sensitivity. Value can be found in the published state on the <code>sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;sensitivity&quot;: NEW_VALUE}</code>. The possible values are: <code>low</code>, <code>medium</code>, <code>high</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',15),h={},m=(0,i(983744).Z)(h,[["render",function(e,t){const i=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.kq)(" !!!! "),(0,o.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,o.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,o.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,o.kq)(" !!!! "),s,(0,o._)("table",null,[n,(0,o._)("tbody",null,[a,(0,o._)("tr",null,[d,(0,o._)("td",null,[(0,o.Wm)(i,{to:"/supported-devices/#v=ONENUO"},{default:(0,o.w5)((()=>[(0,o.Uk)("ONENUO")])),_:1})])]),l,r,c])]),(0,o.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,o.kq)(" Notes END: Do not edit below this line "),u])}]])}}]);