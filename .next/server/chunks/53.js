exports.id = 53;
exports.ids = [53];
exports.modules = {

/***/ 53:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ map; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
// EXTERNAL MODULE: external "react-leaflet"
var external_react_leaflet_ = __webpack_require__(656);
// EXTERNAL MODULE: external "leaflet-defaulticon-compatibility"
var external_leaflet_defaulticon_compatibility_ = __webpack_require__(372);
// EXTERNAL MODULE: ./component/map.module.css
var map_module = __webpack_require__(735);
var map_module_default = /*#__PURE__*/__webpack_require__.n(map_module);
;// CONCATENATED MODULE: ./component/Markers/Marker/marker.js







const Point = props => {
  const zoneOptions = {
    color: props.color,
    fillColor: props.color
  };
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_leaflet_.FeatureGroup, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_leaflet_.Circle, {
      center: props.position,
      pathOptions: zoneOptions,
      radius: 200,
      stroke: true,
      draggable: true
    }), /*#__PURE__*/jsx_runtime_.jsx(external_react_leaflet_.Popup, {
      children: props.info
    })]
  });
};

/* harmony default export */ var Marker_marker = (Point);
;// CONCATENATED MODULE: ./component/Markers/markers.js


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class Markers extends external_react_.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      markers: []
    });
  }

  analise() {
    const KMeans = __webpack_require__(191).KMeans;

    const dataForge = __webpack_require__(706);

    const df = dataForge.fromCSV('./Data/directory.csv');
    const newMarkers = [...df.serialize()];
    this.setState({
      markers: newMarkers
    });
    const subset = df.subset(["sqm"]);
    const kmeans = new KMeans(4);
    kmeans.cluster(subset.toRows(), function (err, clusters, centroids) {
      console.log(err);
      console.log(clusters);
      console.log(centroids);
    });
    clusters.forEach(function (cluster, index) {
      const color = colors[index];
      this.state.markers.map(marker => {
        if (marker.sqm == cluster) {
          const newMarker = marker;
          newMarker.color = color;
        }
      });
    });
  }

  render() {
    this.analise();
    const points = this.state.markers;
    return points.map(marker => {
      console.log(marker);
      return /*#__PURE__*/jsx_runtime_.jsx(Marker_marker, {
        position: [marker.lat, marker.long],
        color: marker.color,
        info: marker.number
      }, marker.key);
    });
  }

}

/* harmony default export */ var markers = (Markers);
;// CONCATENATED MODULE: ./component/map.jsx










class Map extends external_react_.Component {
  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_leaflet_.MapContainer, {
      className: (map_module_default()).map,
      center: [51.505, -0.09],
      zoom: 13,
      dragging: true,
      scrollWheelZoom: true,
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_leaflet_.TileLayer, {
        attribution: "\xA9 <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors",
        url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      }), /*#__PURE__*/jsx_runtime_.jsx(markers, {})]
    });
  }

}

/* harmony default export */ var map = (Map);

/***/ })

};
;