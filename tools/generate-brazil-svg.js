// generate-brazil-svg.js
// Fetches world-atlas TopoJSON (10m), extracts Brazil feature and writes a static SVG.

const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const topojson = require('topojson-client');
const d3geo = require('d3-geo');
const d3geoPath = require('d3-geo-path');

(async function(){
  try {
    const topoUrl = 'https://unpkg.com/world-atlas@2.0.2/countries-10m.json';
    console.log('Fetching TopoJSON...', topoUrl);
    const res = await fetch(topoUrl);
    if (!res.ok) throw new Error(`TopoJSON fetch failed: ${res.status}`);
    const topology = await res.json();

    const countries = topojson.feature(topology, topology.objects.countries);
    let brazil = countries.features.find(f => {
      const props = f.properties || {};
      const name = (props.name || props.ADMIN || '').toString().toLowerCase();
      if (name === 'brazil' || name === 'brasil') return true;
      if (String(f.id) === '76') return true;
      if (props.iso_a3 === 'BRA' || props.ISO_A3 === 'BRA') return true;
      return false;
    });

    if (!brazil) {
      // fallback search
      brazil = countries.features.find(f => f.properties && (f.properties.iso_a3 === 'BRA' || f.properties.ISO_A3 === 'BRA' || (f.properties.name && /brazil|brasil/i.test(f.properties.name))));
    }

    if (!brazil) throw new Error('Brazil feature not found in TopoJSON');

    // Prepare projection and path generator sized to target SVG viewBox
    const svgWidth = 500, svgHeight = 400;
    const projection = d3geo.geoMercator();
    const pathGen = d3geo.geoPath().projection(projection);
    projection.fitExtent([[5,5],[svgWidth-5, svgHeight-5]], brazil);

    const pathD = pathGen(brazil);
    if (!pathD) throw new Error('Failed to generate path string for Brazil');

    const svgContent = `<?xml version="1.0" encoding="UTF-8"?>\n`+
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${svgWidth} ${svgHeight}" width="${svgWidth}" height="${svgHeight}">\n`+
      `  <title>Brazil outline (Natural Earth, public domain)</title>\n`+
      `  <desc>Derived from Natural Earth via world-atlas (countries-10m.json). Public domain.</desc>\n`+
      `  <path d="${pathD}" fill="#e0e7ff" stroke="#667eea" stroke-width="1.5"/>\n`+
      `</svg>\n`;

    const outPath = path.join(__dirname, '..', 'brazil-outline.svg');
    fs.writeFileSync(outPath, svgContent, 'utf8');
    console.log('Saved SVG to', outPath);
  } catch (err) {
    console.error('Error:', err);
    process.exit(1);
  }
})();
