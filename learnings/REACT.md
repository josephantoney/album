<h2>ReactDOM</h2>

<ul>
    <li>render(): plugs the supplied jsx element to DOM. Usage in web-client package root.tsx. From browser access localhost:4000/ and check server sent html file this will have empty <strong>root</strong> node</li>
    <li>hydrate(): similar to render but SSR is already done so plugs client side events and skips UI rerendering. Usage in web-client package root.tsx. </li></li>
</ul>
<br>

<h2>ReactDOMServer</h2>
<ul>
<li>renderToString(): converts jsx element to equivalent string for SSR. Usage in web-server package html-builder.tsx. From browser access localhost:4000/server.html and check server sent server.html file this will have SSR content in the <strong>root</strong> node </li>
</ul>
