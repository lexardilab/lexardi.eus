// components/MetricoolScript.js
import Script from 'next/script';

export default function MetricoolScript() {
  return (
    <Script
      id="metricool-script"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          function loadScript(a){
            var b=document.getElementsByTagName("head")[0],
                c=document.createElement("script");
            c.type="text/javascript";
            c.src="https://tracker.metricool.com/resources/be.js";
            c.onreadystatechange=a;
            c.onload=a;
            b.appendChild(c);
          }
          loadScript(function(){
            beTracker.t({hash:"77f38935c403ae4e8b00812b55c6fa60"});
          });
        `,
      }}
    />
  );
}
