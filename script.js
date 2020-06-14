TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfovMax": 90,
  "cardboardMenu": {
   "selectedBackgroundColor": "#202020",
   "fontFamily": "Arial",
   "rollOverBackgroundColor": "#000000",
   "label": "Media",
   "backgroundColor": "#404040",
   "rollOverFontColor": "#FFFFFF",
   "opacity": 0.4,
   "id": "Menu_B825C04C_AF57_3732_41DE_2075CAA18A02",
   "rollOverOpacity": 0.8,
   "selectedFontColor": "#FFFFFF",
   "children": [
    {
     "label": "01",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 0)"
    },
    {
     "label": "02",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 1)"
    },
    {
     "label": "03",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 2)"
    },
    {
     "label": "05",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 3)"
    }
   ],
   "fontColor": "#FFFFFF",
   "class": "Menu"
  },
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_A6C19F8A_AF35_0937_41E3_2098F4681680_t.jpg",
  "id": "panorama_A6C19F8A_AF35_0937_41E3_2098F4681680",
  "hfovMin": 35,
  "label": "01",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_A6C19F8A_AF35_0937_41E3_2098F4681680_t.jpg",
    "overlays": [
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 26,
           "width": 12,
           "url": "media/panorama_A6C19F8A_AF35_0937_41E3_2098F4681680_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 2.2,
        "yaw": 83.58,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -3.23
       }
      ],
      "id": "overlay_A2C7A889_AF4B_7732_41DF_CC7501975685",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_A6003D02_AF3B_0936_41A5_94E53BF0BFC9, this.camera_B83DD095_AF57_375D_41BD_5CCA813FE64B); this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "yaw": 83.58,
        "pitch": -3.23,
        "hfov": 2.2,
        "image": {
         "levels": [
          {
           "height": 52,
           "width": 25,
           "url": "media/panorama_A6C19F8A_AF35_0937_41E3_2098F4681680_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage"
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 12,
           "width": 12,
           "url": "media/panorama_A6C19F8A_AF35_0937_41E3_2098F4681680_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 2.19,
        "yaw": -88.99,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -2.99
       }
      ],
      "id": "overlay_A04E1786_AF77_193F_41C2_C37327D3B1B3",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_A60D65D5_AF3B_18D2_41CB_5D322DD9C671, this.camera_B8336087_AF57_373D_41E2_79F9005A32E8); this.mainPlayList.set('selectedIndex', 2)"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "yaw": -88.99,
        "pitch": -2.99,
        "hfov": 2.19,
        "image": {
         "levels": [
          {
           "height": 24,
           "width": 24,
           "url": "media/panorama_A6C19F8A_AF35_0937_41E3_2098F4681680_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage"
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 12,
           "width": 12,
           "url": "media/panorama_A6C19F8A_AF35_0937_41E3_2098F4681680_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 2.2,
        "yaw": -77.21,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 0.03
       }
      ],
      "id": "overlay_A0DA9A82_AF7D_0B37_41D1_4E3C9BE3310F",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 3)"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "yaw": -77.21,
        "pitch": 0.03,
        "hfov": 2.2,
        "image": {
         "levels": [
          {
           "height": 25,
           "width": 25,
           "url": "media/panorama_A6C19F8A_AF35_0937_41E3_2098F4681680_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage"
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 35,
           "url": "media/panorama_A6C19F8A_AF35_0937_41E3_2098F4681680_0_HS_3_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 10.84,
        "yaw": 55.8,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 4.61
       }
      ],
      "id": "overlay_BF7DF475_AF4D_3FD2_41E4_6D4DDD488E11",
      "useHandCursor": true,
      "rollOverDisplay": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showWindow(this.window_BE4C0F34_AF55_0953_41C4_1B8EF8EED9BA, null, false)"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "yaw": 55.8,
        "pitch": 4.61,
        "hfov": 10.84,
        "image": {
         "levels": [
          {
           "height": 56,
           "width": 123,
           "url": "media/panorama_A6C19F8A_AF35_0937_41E3_2098F4681680_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage"
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 90,
           "width": 62,
           "url": "media/panorama_A6C19F8A_AF35_0937_41E3_2098F4681680_0_HS_4_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 10.92,
        "yaw": 47.8,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 4.31
       }
      ],
      "id": "overlay_BFA984E4_AF4D_18F3_41DE_CB67C5D13FD4",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "displayTooltipInTouchScreens": true,
        "mapColor": "#FF0000",
        "toolTip": "Problem",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "yaw": 47.8,
        "pitch": 4.31,
        "hfov": 10.92,
        "image": {
         "levels": [
          {
           "height": 181,
           "width": 124,
           "url": "media/panorama_A6C19F8A_AF35_0937_41E3_2098F4681680_0_HS_4_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage"
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 138,
           "width": 106,
           "url": "media/panorama_A6C19F8A_AF35_0937_41E3_2098F4681680_0_HS_5_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 18.49,
        "yaw": 90.1,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 10.33
       }
      ],
      "id": "overlay_BD3100CB_AF4F_1736_41E5_5D771C2CB65E",
      "useHandCursor": true,
      "rollOverDisplay": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showWindow(this.window_BE7E2569_AF4D_F9F2_41D7_C5303D05B079, null, false)"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "yaw": 90.1,
        "pitch": 10.33,
        "roll": 0,
        "hfov": 18.49,
        "image": {
         "levels": [
          {
           "height": 276,
           "width": 212,
           "url": "media/panorama_A6C19F8A_AF35_0937_41E3_2098F4681680_0_HS_5_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage"
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 40,
           "width": 11,
           "url": "media/panorama_A6C19F8A_AF35_0937_41E3_2098F4681680_0_HS_7_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 2.11,
        "yaw": 97.9,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -2.45
       }
      ],
      "id": "overlay_BDADC5EE_AF55_18CF_41E2_89ECF43871BC",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "displayTooltipInTouchScreens": true,
        "mapColor": "#FF0000",
        "toolTip": "Lumion Car",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "yaw": 97.9,
        "pitch": -2.45,
        "hfov": 2.11,
        "image": {
         "levels": [
          {
           "height": 80,
           "width": 23,
           "url": "media/panorama_A6C19F8A_AF35_0937_41E3_2098F4681680_0_HS_7_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage"
       }
      ]
     },
     {
      "bleachingDistance": 0.72,
      "id": "overlay_BE41F18B_AF5D_1936_41D4_3355DFF06027",
      "bleaching": 0.99,
      "yaw": -122.25,
      "class": "LensFlarePanoramaOverlay",
      "pitch": 24.47
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2048,
       "width": 4096,
       "url": "media/panorama_A6C19F8A_AF35_0937_41E3_2098F4681680_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_A6C19F8A_AF35_0937_41E3_2098F4681680.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfov": 360,
  "adjacentPanoramas": [
   {
    "panorama": {
     "hfovMax": 120,
     "cardboardMenu": "this.Menu_B825C04C_AF57_3732_41DE_2075CAA18A02",
     "partial": false,
     "pitch": 0,
     "thumbnailUrl": "media/panorama_A60D65D5_AF3B_18D2_41CB_5D322DD9C671_t.jpg",
     "id": "panorama_A60D65D5_AF3B_18D2_41CB_5D322DD9C671",
     "hfovMin": 60,
     "frames": [
      {
       "thumbnailUrl": "media/panorama_A60D65D5_AF3B_18D2_41CB_5D322DD9C671_t.jpg",
       "overlays": [
        {
         "maps": [
          {
           "image": {
            "levels": [
             {
              "height": 12,
              "width": 12,
              "url": "media/panorama_A60D65D5_AF3B_18D2_41CB_5D322DD9C671_0_HS_0_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 2.2,
           "yaw": -19.89,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": 0.03
          }
         ],
         "id": "overlay_A0B89951_AF7D_09D5_41DD_61206DC1C2F6",
         "useHandCursor": true,
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_A60D5D42_AF3B_0937_41C9_03890DDED7FF, this.camera_B835A078_AF57_37D2_41E2_9B692A6B8648); this.mainPlayList.set('selectedIndex', 3)"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": -19.89,
           "pitch": 0.03,
           "hfov": 2.2,
           "image": {
            "levels": [
             {
              "height": 25,
              "width": 25,
              "url": "media/panorama_A60D65D5_AF3B_18D2_41CB_5D322DD9C671_0_HS_0_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayImage"
          }
         ]
        },
        {
         "maps": [
          {
           "image": {
            "levels": [
             {
              "height": 12,
              "width": 12,
              "url": "media/panorama_A60D65D5_AF3B_18D2_41CB_5D322DD9C671_0_HS_1_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 2.2,
           "yaw": 4.3,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": 0.1
          }
         ],
         "id": "overlay_A08CC58C_AF7B_1933_41B4_20F7EAD062DE",
         "useHandCursor": true,
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": 4.3,
           "pitch": 0.1,
           "hfov": 2.2,
           "image": {
            "levels": [
             {
              "height": 25,
              "width": 25,
              "url": "media/panorama_A60D65D5_AF3B_18D2_41CB_5D322DD9C671_0_HS_1_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayImage"
          }
         ]
        },
        {
         "maps": [
          {
           "image": {
            "levels": [
             {
              "height": 16,
              "width": 61,
              "url": "media/panorama_A60D65D5_AF3B_18D2_41CB_5D322DD9C671_0_HS_2_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 13.35,
           "yaw": 4.4,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -1.29
          }
         ],
         "id": "overlay_A0398EFE_AF7B_08CE_41E2_9C134D560216",
         "useHandCursor": true,
         "enabledInCardboard": true,
         "rollOverDisplay": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_A6C19F8A_AF35_0937_41E3_2098F4681680, this.camera_B82CD05D_AF57_37D2_41D1_1806A46B7B74); this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": 4.4,
           "pitch": -1.29,
           "hfov": 13.35,
           "image": {
            "levels": [
             {
              "height": 39,
              "width": 151,
              "url": "media/panorama_A60D65D5_AF3B_18D2_41CB_5D322DD9C671_0_HS_2_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayImage"
          }
         ]
        }
       ],
       "class": "SphericPanoramaFrame",
       "sphere": {
        "levels": [
         {
          "height": 2048,
          "width": 4096,
          "url": "media/panorama_A60D65D5_AF3B_18D2_41CB_5D322DD9C671_hq.jpeg",
          "class": "ImageResourceLevel"
         },
         {
          "height": 1608,
          "width": 3217,
          "url": "media/panorama_A60D65D5_AF3B_18D2_41CB_5D322DD9C671.jpeg",
          "class": "ImageResourceLevel"
         }
        ],
        "class": "ImageResource"
       }
      }
     ],
     "label": "03",
     "hfov": 360,
     "adjacentPanoramas": [
      {
       "panorama": "this.panorama_A6C19F8A_AF35_0937_41E3_2098F4681680",
       "yaw": 4.4,
       "class": "AdjacentPanorama",
       "backwardYaw": -88.99,
       "distance": 1
      },
      {
       "panorama": {
        "hfovMax": 120,
        "cardboardMenu": "this.Menu_B825C04C_AF57_3732_41DE_2075CAA18A02",
        "partial": false,
        "pitch": 0,
        "thumbnailUrl": "media/panorama_A60D5D42_AF3B_0937_41C9_03890DDED7FF_t.jpg",
        "id": "panorama_A60D5D42_AF3B_0937_41C9_03890DDED7FF",
        "hfovMin": 60,
        "frames": [
         {
          "thumbnailUrl": "media/panorama_A60D5D42_AF3B_0937_41C9_03890DDED7FF_t.jpg",
          "overlays": [
           {
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "height": 12,
                 "width": 12,
                 "url": "media/panorama_A60D5D42_AF3B_0937_41C9_03890DDED7FF_0_HS_0_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "hfov": 2.19,
              "yaw": 46.03,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -4.57
             }
            ],
            "id": "overlay_BF3D5A0D_AF4B_0B32_41CF_BAABDBD70A14",
            "useHandCursor": true,
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_A60D65D5_AF3B_18D2_41CB_5D322DD9C671, this.camera_B81740BD_AF57_374D_41BA_E0D975432720); this.mainPlayList.set('selectedIndex', 2)"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "items": [
             {
              "yaw": 46.03,
              "pitch": -4.57,
              "hfov": 2.19,
              "image": {
               "levels": [
                {
                 "height": 25,
                 "width": 25,
                 "url": "media/panorama_A60D5D42_AF3B_0937_41C9_03890DDED7FF_0_HS_0_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayImage"
             }
            ]
           }
          ],
          "class": "SphericPanoramaFrame",
          "sphere": {
           "levels": [
            {
             "height": 2048,
             "width": 4096,
             "url": "media/panorama_A60D5D42_AF3B_0937_41C9_03890DDED7FF_hq.jpeg",
             "class": "ImageResourceLevel"
            },
            {
             "height": 1608,
             "width": 3217,
             "url": "media/panorama_A60D5D42_AF3B_0937_41C9_03890DDED7FF.jpeg",
             "class": "ImageResourceLevel"
            }
           ],
           "class": "ImageResource"
          }
         }
        ],
        "label": "05",
        "hfov": 360,
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_A60D65D5_AF3B_18D2_41CB_5D322DD9C671",
          "yaw": 46.03,
          "class": "AdjacentPanorama",
          "backwardYaw": -19.89,
          "distance": 1
         }
        ],
        "class": "Panorama",
        "vfov": 180
       },
       "yaw": -19.89,
       "class": "AdjacentPanorama",
       "backwardYaw": 46.03,
       "distance": 1
      }
     ],
     "class": "Panorama",
     "vfov": 180
    },
    "yaw": -88.99,
    "class": "AdjacentPanorama",
    "backwardYaw": 4.4,
    "distance": 1
   },
   {
    "panorama": {
     "hfovMax": 90,
     "cardboardMenu": "this.Menu_B825C04C_AF57_3732_41DE_2075CAA18A02",
     "partial": false,
     "pitch": 0,
     "thumbnailUrl": "media/panorama_A6003D02_AF3B_0936_41A5_94E53BF0BFC9_t.jpg",
     "id": "panorama_A6003D02_AF3B_0936_41A5_94E53BF0BFC9",
     "hfovMin": 35,
     "label": "02",
     "frames": [
      {
       "thumbnailUrl": "media/panorama_A6003D02_AF3B_0936_41A5_94E53BF0BFC9_t.jpg",
       "overlays": [
        {
         "maps": [
          {
           "image": {
            "levels": [
             {
              "height": 22,
              "width": 25,
              "url": "media/panorama_A6003D02_AF3B_0936_41A5_94E53BF0BFC9_0_HS_0_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 4.47,
           "yaw": 174.47,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -6.97
          }
         ],
         "id": "overlay_A0100CE8_AF4D_08F2_41E4_F2DCA4FD4FB3",
         "useHandCursor": true,
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_A6C19F8A_AF35_0937_41E3_2098F4681680, this.camera_B80470A3_AF57_3775_418E_1ADC0771BDE0); this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": 174.47,
           "pitch": -6.97,
           "hfov": 4.47,
           "image": {
            "levels": [
             {
              "height": 44,
              "width": 51,
              "url": "media/panorama_A6003D02_AF3B_0936_41A5_94E53BF0BFC9_0_HS_0_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayImage"
          }
         ]
        }
       ],
       "class": "SphericPanoramaFrame",
       "sphere": {
        "levels": [
         {
          "height": 2048,
          "width": 4096,
          "url": "media/panorama_A6003D02_AF3B_0936_41A5_94E53BF0BFC9_hq.jpeg",
          "class": "ImageResourceLevel"
         },
         {
          "height": 1608,
          "width": 3217,
          "url": "media/panorama_A6003D02_AF3B_0936_41A5_94E53BF0BFC9.jpeg",
          "class": "ImageResourceLevel"
         }
        ],
        "class": "ImageResource"
       }
      }
     ],
     "hfov": 360,
     "adjacentPanoramas": [
      {
       "panorama": "this.panorama_A6C19F8A_AF35_0937_41E3_2098F4681680",
       "yaw": 174.47,
       "class": "AdjacentPanorama",
       "backwardYaw": 83.58,
       "distance": 1
      }
     ],
     "class": "Panorama",
     "vfov": 180
    },
    "yaw": 83.58,
    "class": "AdjacentPanorama",
    "backwardYaw": 174.47,
    "distance": 1
   }
  ],
  "class": "Panorama",
  "vfov": 180
 },
 {
  "id": "MainViewerPanoramaPlayer",
  "viewerArea": "this.MainViewer",
  "gyroscopeVerticalDraggingEnabled": true,
  "displayPlaybackBar": true,
  "mouseControlMode": "drag_acceleration",
  "class": "PanoramaPlayer",
  "touchControlMode": "drag_rotation",
  "preloadEnabled": false
 },
 {
  "manualRotationSpeed": 1200,
  "id": "panorama_A6C19F8A_AF35_0937_41E3_2098F4681680_camera",
  "initialSequence": {
   "movements": [],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 90,
   "yaw": 47.98,
   "class": "PanoramaCameraPosition",
   "pitch": -3.79
  },
  "automaticRotationSpeed": 12,
  "class": "PanoramaCamera"
 },
 "this.panorama_A6003D02_AF3B_0936_41A5_94E53BF0BFC9",
 {
  "id": "panorama_A6003D02_AF3B_0936_41A5_94E53BF0BFC9_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 90,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_A60D65D5_AF3B_18D2_41CB_5D322DD9C671",
 {
  "id": "panorama_A60D65D5_AF3B_18D2_41CB_5D322DD9C671_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -0.82,
   "class": "PanoramaCameraPosition",
   "pitch": -3.28
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_A60D5D42_AF3B_0937_41C9_03890DDED7FF",
 {
  "id": "panorama_A60D5D42_AF3B_0937_41C9_03890DDED7FF_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "mainPlayList",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "media": "this.panorama_A6C19F8A_AF35_0937_41E3_2098F4681680",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_A6C19F8A_AF35_0937_41E3_2098F4681680_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "media": "this.panorama_A6003D02_AF3B_0936_41A5_94E53BF0BFC9",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_A6003D02_AF3B_0936_41A5_94E53BF0BFC9_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "media": "this.panorama_A60D65D5_AF3B_18D2_41CB_5D322DD9C671",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_A60D65D5_AF3B_18D2_41CB_5D322DD9C671_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 0)",
    "media": "this.panorama_A60D5D42_AF3B_0937_41C9_03890DDED7FF",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_A60D5D42_AF3B_0937_41C9_03890DDED7FF_camera"
   }
  ]
 },
 {
  "initialZoomFactor": 1,
  "fieldOfViewOverlayInsideColor": "#990000",
  "fieldOfViewOverlayInsideOpacity": 0.47,
  "width": 1280,
  "id": "map_BE1A3823_AF5B_7775_41D6_A124A663CDEB",
  "height": 720,
  "minimumZoomFactor": 0.5,
  "image": {
   "levels": [
    {
     "height": 720,
     "width": 1280,
     "url": "media/map_BE1A3823_AF5B_7775_41D6_A124A663CDEB.jpeg",
     "class": "ImageResourceLevel"
    },
    {
     "height": 360,
     "width": 640,
     "url": "media/map_BE1A3823_AF5B_7775_41D6_A124A663CDEB_lq.jpeg",
     "class": "ImageResourceLevel",
     "grayscale": true
    }
   ],
   "class": "ImageResource"
  },
  "fieldOfViewOverlayOutsideColor": "#000000",
  "thumbnailUrl": "media/map_BE1A3823_AF5B_7775_41D6_A124A663CDEB_t.jpg",
  "fieldOfViewOverlayOutsideOpacity": 0.28,
  "label": "Res render 04",
  "overlays": [
   {
    "id": "overlay_BCEF9468_AF55_1FF3_41CE_F781BDA3D96F",
    "map": {
     "offsetY": 0,
     "x": 395.13,
     "width": 95.85,
     "y": 518.96,
     "height": 74.2,
     "offsetX": 0,
     "image": {
      "levels": [
       {
        "height": 35,
        "width": 45,
        "url": "media/map_BE1A3823_AF5B_7775_41D6_A124A663CDEB_HS_0_map.gif",
        "class": "ImageResourceLevel"
       }
      ],
      "class": "ImageResource"
     },
     "class": "HotspotMapOverlayMap"
    },
    "areas": [
     {
      "mapColor": "#FF0000",
      "class": "HotspotMapOverlayArea",
      "click": "this.mainPlayList.set('selectedIndex', 1)"
     }
    ],
    "rollOverDisplay": false,
    "image": {
     "x": 395.13,
     "width": 95.85,
     "y": 518.96,
     "height": 74.2,
     "image": {
      "levels": [
       {
        "height": 70,
        "width": 91,
        "url": "media/map_BE1A3823_AF5B_7775_41D6_A124A663CDEB_HS_0.png",
        "class": "ImageResourceLevel"
       }
      ],
      "class": "ImageResource"
     },
     "class": "HotspotMapOverlayImage"
    },
    "class": "AreaHotspotMapOverlay",
    "useHandCursor": true
   },
   {
    "id": "overlay_BD2B2FFC_AF55_08D3_41B9_45A5926813C9",
    "map": {
     "offsetY": 0,
     "x": 598.57,
     "width": 32.62,
     "y": 277.64,
     "height": 26.9,
     "offsetX": 0,
     "image": {
      "levels": [
       {
        "height": 11,
        "width": 14,
        "url": "media/map_BE1A3823_AF5B_7775_41D6_A124A663CDEB_HS_1_map.gif",
        "class": "ImageResourceLevel"
       }
      ],
      "class": "ImageResource"
     },
     "class": "HotspotMapOverlayMap"
    },
    "areas": [
     {
      "mapColor": "#FF0000",
      "class": "HotspotMapOverlayArea",
      "click": "this.mainPlayList.set('selectedIndex', 0)"
     }
    ],
    "rollOverDisplay": false,
    "image": {
     "x": 598.57,
     "width": 32.62,
     "y": 277.64,
     "height": 26.9,
     "image": {
      "levels": [
       {
        "height": 22,
        "width": 28,
        "url": "media/map_BE1A3823_AF5B_7775_41D6_A124A663CDEB_HS_1.png",
        "class": "ImageResourceLevel"
       }
      ],
      "class": "ImageResource"
     },
     "class": "HotspotMapOverlayImage"
    },
    "class": "AreaHotspotMapOverlay",
    "useHandCursor": true
   },
   {
    "id": "overlay_BD3D30BF_AF57_174D_41B8_823374172BD5",
    "map": {
     "offsetY": 0,
     "x": 735.07,
     "width": 22.57,
     "y": 149.49,
     "height": 16.23,
     "offsetX": 0,
     "image": {
      "levels": [
       {
        "height": 6,
        "width": 9,
        "url": "media/map_BE1A3823_AF5B_7775_41D6_A124A663CDEB_HS_2_map.gif",
        "class": "ImageResourceLevel"
       }
      ],
      "class": "ImageResource"
     },
     "class": "HotspotMapOverlayMap"
    },
    "areas": [
     {
      "mapColor": "#FF0000",
      "class": "HotspotMapOverlayArea",
      "click": "this.mainPlayList.set('selectedIndex', 2)"
     }
    ],
    "rollOverDisplay": false,
    "image": {
     "x": 735.07,
     "width": 22.57,
     "y": 149.49,
     "height": 16.23,
     "image": {
      "levels": [
       {
        "height": 12,
        "width": 18,
        "url": "media/map_BE1A3823_AF5B_7775_41D6_A124A663CDEB_HS_2.png",
        "class": "ImageResourceLevel"
       }
      ],
      "class": "ImageResource"
     },
     "class": "HotspotMapOverlayImage"
    },
    "class": "AreaHotspotMapOverlay",
    "useHandCursor": true
   },
   {
    "id": "overlay_BDD2AD29_AF57_0975_41E4_BB3C14999BAD",
    "map": {
     "offsetY": 0,
     "x": 761.97,
     "width": 18.71,
     "y": 195.4,
     "height": 16.7,
     "offsetX": 0,
     "image": {
      "levels": [
       {
        "height": 6,
        "width": 7,
        "url": "media/map_BE1A3823_AF5B_7775_41D6_A124A663CDEB_HS_3_map.gif",
        "class": "ImageResourceLevel"
       }
      ],
      "class": "ImageResource"
     },
     "class": "HotspotMapOverlayMap"
    },
    "areas": [
     {
      "mapColor": "#FF0000",
      "class": "HotspotMapOverlayArea",
      "click": "this.mainPlayList.set('selectedIndex', 3)"
     }
    ],
    "rollOverDisplay": false,
    "image": {
     "x": 761.97,
     "width": 18.71,
     "y": 195.4,
     "height": 16.7,
     "image": {
      "levels": [
       {
        "height": 12,
        "width": 14,
        "url": "media/map_BE1A3823_AF5B_7775_41D6_A124A663CDEB_HS_3.png",
        "class": "ImageResourceLevel"
       }
      ],
      "class": "ImageResource"
     },
     "class": "HotspotMapOverlayImage"
    },
    "class": "AreaHotspotMapOverlay",
    "useHandCursor": true
   }
  ],
  "fieldOfViewOverlayRadiusScale": 1,
  "scaleMode": "fit_inside",
  "maximumZoomFactor": 1.2,
  "class": "Map"
 },
 {
  "movementMode": "constrained",
  "id": "MapViewerMapPlayer",
  "class": "MapPlayer",
  "viewerArea": "this.MapViewer"
 },
 {
  "id": "playList_B8279049_AF57_3732_41D0_ADC6DF4A06A3",
  "class": "PlayList",
  "items": [
   {
    "player": "this.MapViewerMapPlayer",
    "class": "MapPlayListItem",
    "media": "this.map_BE1A3823_AF5B_7775_41D6_A124A663CDEB",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   }
  ]
 },
 "this.Menu_B825C04C_AF57_3732_41DE_2075CAA18A02",
 {
  "bodyPaddingRight": 5,
  "paddingLeft": 0,
  "paddingRight": 0,
  "verticalAlign": "middle",
  "closeButtonPressedBackgroundOpacity": 1,
  "titlePaddingRight": 5,
  "modal": true,
  "bodyBorderSize": 0,
  "closeButtonRollOverBorderColor": "#000000",
  "backgroundColor": [],
  "veilColorRatios": [
   0.4
  ],
  "minHeight": 20,
  "hideEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeOutEffect"
  },
  "gap": 10,
  "title": "Urgent Problem",
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "closeButtonPaddingTop": 0,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "titleFontColor": "#FFFFFF",
  "closeButtonPaddingRight": 0,
  "horizontalAlign": "center",
  "layout": "vertical",
  "class": "Window",
  "closeButtonBackgroundColorDirection": "vertical",
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "bodyPaddingBottom": 5,
  "shadowOpacity": 0.5,
  "footerBackgroundOpacity": 1,
  "titlePaddingBottom": 5,
  "paddingBottom": 0,
  "veilShowEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeInEffect"
  },
  "backgroundColorRatios": [],
  "closeButtonPressedIconLineWidth": 1,
  "headerBorderSize": 0,
  "bodyBackgroundColorDirection": "vertical",
  "closeButtonPaddingBottom": 0,
  "closeButtonBackgroundColorRatios": [],
  "minWidth": 20,
  "shadowColor": "#000000",
  "veilColorDirection": "horizontal",
  "footerHeight": 5,
  "paddingTop": 0,
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeInEffect"
  },
  "titlePaddingLeft": 5,
  "closeButtonBackgroundColor": [],
  "bodyBorderColor": "#000000",
  "shadowSpread": 1,
  "closeButtonRollOverBackgroundOpacity": 1,
  "veilHideEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeOutEffect"
  },
  "headerBorderColor": "#222222",
  "veilColor": [
   "#000000"
  ],
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonBorderSize": 0,
  "titleFontStyle": "normal",
  "bodyBackgroundOpacity": 1,
  "overflow": "scroll",
  "headerPaddingBottom": 10,
  "closeButtonRollOverIconLineWidth": 1,
  "bodyPaddingLeft": 5,
  "scrollBarVisible": "rollOver",
  "closeButtonRollOverIconColor": "#FFFFFF",
  "veilOpacity": 0.7,
  "backgroundColorDirection": "vertical",
  "bodyPaddingTop": 5,
  "closeButtonBorderColor": "#000000",
  "shadow": true,
  "children": [
   {
    "scrollBarColor": "#000000",
    "paddingLeft": 10,
    "shadow": false,
    "paddingRight": 10,
    "scrollBarOpacity": 0.5,
    "height": "100%",
    "width": "100%",
    "minHeight": 0,
    "borderRadius": 0,
    "borderSize": 0,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "class": "HTMLText",
    "paddingBottom": 10,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:30px;font-family:Impact, Charcoal, sans-serif;\">Thic car to be fixed today</SPAN></SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:Tahoma, Geneva, sans-serif;\"> - Dad is a CEO in a big company</SPAN></SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:Tahoma, Geneva, sans-serif;\"> - Boy is a student </SPAN></SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:Tahoma, Geneva, sans-serif;\">OKAY</SPAN></SPAN></DIV></div>",
    "id": "htmlText_uidB858E041_AF57_3732_41E0_7F10BFE29A60",
    "minWidth": 0,
    "paddingTop": 10,
    "backgroundOpacity": 0,
    "scrollBarVisible": "rollOver"
   }
  ],
  "scrollBarColor": "#000000",
  "headerBackgroundColorRatios": [
   0
  ],
  "scrollBarOpacity": 0.5,
  "width": 400,
  "shadowVerticalLength": 0,
  "height": 600,
  "titlePaddingTop": 5,
  "closeButtonPaddingLeft": 0,
  "borderRadius": 5,
  "contentOpaque": false,
  "closeButtonIconColor": "#000000",
  "borderSize": 0,
  "closeButtonIconWidth": 12,
  "closeButtonPressedBorderSize": 0,
  "headerBackgroundColor": [
   "#333333"
  ],
  "closeButtonRollOverBorderSize": 0,
  "closeButtonPressedIconColor": "#FFFFFF",
  "closeButtonIconLineWidth": 2,
  "footerBackgroundColor": [
   "#000000"
  ],
  "titleFontFamily": "Verdana",
  "bodyBackgroundColorRatios": [
   0
  ],
  "footerBorderColor": "#000000",
  "titleFontSize": 14,
  "headerBackgroundOpacity": 1,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "closeButtonPressedBorderColor": "#000000",
  "id": "window_BE4C0F34_AF55_0953_41C4_1B8EF8EED9BA",
  "closeButtonBackgroundOpacity": 1,
  "headerPaddingTop": 10,
  "footerBorderSize": 0,
  "headerBackgroundColorDirection": "horizontal",
  "footerBackgroundColorRatios": [
   0
  ],
  "titleFontWeight": "bold",
  "shadowBlurRadius": 6,
  "headerPaddingLeft": 10,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "shadowHorizontalLength": 3,
  "bodyBackgroundColor": [
   "#333333"
  ],
  "headerPaddingRight": 10,
  "titleTextDecoration": "none",
  "backgroundOpacity": 1,
  "footerBackgroundColorDirection": "vertical",
  "closeButtonBorderRadius": 11,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "headerVerticalAlign": "middle",
  "closeButtonIconHeight": 12
 },
 {
  "bodyPaddingRight": 5,
  "paddingLeft": 0,
  "paddingRight": 0,
  "verticalAlign": "middle",
  "closeButtonPressedBackgroundOpacity": 1,
  "titlePaddingRight": 5,
  "modal": true,
  "bodyBorderSize": 0,
  "closeButtonRollOverBorderColor": "#000000",
  "backgroundColor": [],
  "veilColorRatios": [
   0.4
  ],
  "minHeight": 20,
  "hideEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeOutEffect"
  },
  "gap": 10,
  "title": "Lumion Buildings",
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "veilColorDirection": "horizontal",
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "titleFontColor": "#FFFFFF",
  "closeButtonPaddingRight": 0,
  "horizontalAlign": "center",
  "layout": "vertical",
  "class": "Window",
  "closeButtonBackgroundColorDirection": "vertical",
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "bodyPaddingBottom": 5,
  "shadowOpacity": 0.5,
  "footerBackgroundOpacity": 1,
  "titlePaddingBottom": 5,
  "paddingBottom": 0,
  "veilShowEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeInEffect"
  },
  "backgroundColorRatios": [],
  "closeButtonPressedIconLineWidth": 1,
  "headerBorderSize": 0,
  "bodyBackgroundColorDirection": "vertical",
  "closeButtonPaddingBottom": 0,
  "closeButtonBackgroundColorRatios": [],
  "minWidth": 20,
  "shadowColor": "#000000",
  "closeButtonPaddingTop": 0,
  "footerHeight": 5,
  "paddingTop": 0,
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeInEffect"
  },
  "titlePaddingLeft": 5,
  "closeButtonBackgroundColor": [],
  "bodyBorderColor": "#000000",
  "shadowSpread": 1,
  "closeButtonRollOverBackgroundOpacity": 1,
  "veilHideEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeOutEffect"
  },
  "headerBorderColor": "#222222",
  "veilColor": [
   "#000000"
  ],
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonBorderSize": 0,
  "titleFontStyle": "normal",
  "bodyBackgroundOpacity": 1,
  "overflow": "scroll",
  "headerPaddingBottom": 10,
  "closeButtonRollOverIconLineWidth": 1,
  "bodyPaddingLeft": 5,
  "scrollBarVisible": "rollOver",
  "closeButtonRollOverIconColor": "#FFFFFF",
  "veilOpacity": 0.7,
  "backgroundColorDirection": "vertical",
  "bodyPaddingTop": 5,
  "closeButtonBorderColor": "#000000",
  "shadow": true,
  "children": [
   {
    "scrollBarColor": "#000000",
    "paddingLeft": 10,
    "shadow": false,
    "paddingRight": 10,
    "scrollBarOpacity": 0.5,
    "height": "100%",
    "width": "100%",
    "minHeight": 0,
    "borderRadius": 0,
    "borderSize": 0,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "class": "HTMLText",
    "paddingBottom": 10,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:20px;\"><B>This is one of buildings which embeded in </B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:20px;font-family:'Comic Sans MS', cursive;\"><B>Lumion Outdoor Library</B></SPAN></SPAN></DIV></div>",
    "id": "htmlText_uidB859E046_AF57_373E_41E0_F9D3EBA1A5FE",
    "minWidth": 0,
    "paddingTop": 10,
    "backgroundOpacity": 0,
    "scrollBarVisible": "rollOver"
   }
  ],
  "scrollBarColor": "#000000",
  "headerBackgroundColorRatios": [
   0
  ],
  "scrollBarOpacity": 0.5,
  "width": 400,
  "shadowVerticalLength": 0,
  "height": 600,
  "titlePaddingTop": 5,
  "closeButtonPaddingLeft": 0,
  "borderRadius": 5,
  "contentOpaque": false,
  "closeButtonIconColor": "#000000",
  "borderSize": 0,
  "closeButtonIconWidth": 12,
  "closeButtonPressedBorderSize": 0,
  "headerBackgroundColor": [
   "#333333"
  ],
  "closeButtonRollOverBorderSize": 0,
  "closeButtonPressedIconColor": "#FFFFFF",
  "closeButtonIconLineWidth": 2,
  "footerBackgroundColor": [
   "#000000"
  ],
  "titleFontFamily": "Verdana",
  "bodyBackgroundColorRatios": [
   0
  ],
  "footerBorderColor": "#000000",
  "titleFontSize": 14,
  "headerBackgroundOpacity": 1,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "closeButtonPressedBorderColor": "#000000",
  "id": "window_BE7E2569_AF4D_F9F2_41D7_C5303D05B079",
  "closeButtonBackgroundOpacity": 1,
  "headerPaddingTop": 10,
  "titleFontWeight": "bold",
  "headerBackgroundColorDirection": "horizontal",
  "footerBackgroundColorRatios": [
   0
  ],
  "footerBorderSize": 0,
  "shadowBlurRadius": 6,
  "headerPaddingLeft": 10,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "shadowHorizontalLength": 3,
  "bodyBackgroundColor": [
   "#333333"
  ],
  "headerPaddingRight": 10,
  "titleTextDecoration": "none",
  "backgroundOpacity": 1,
  "footerBackgroundColorDirection": "vertical",
  "closeButtonBorderRadius": 11,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "headerVerticalAlign": "middle",
  "closeButtonIconHeight": 12
 },
 {
  "manualRotationSpeed": 1200,
  "id": "camera_B82CD05D_AF57_37D2_41D1_1806A46B7B74",
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 47.98,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -3.79,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 90,
   "yaw": 91.01,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticRotationSpeed": 12,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_B835A078_AF57_37D2_41E2_9B692A6B8648",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -133.97,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_B8336087_AF57_373D_41E2_79F9005A32E8",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -175.6,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_B83DD095_AF57_375D_41BD_5CCA813FE64B",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 90,
   "yaw": -5.53,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "manualRotationSpeed": 1200,
  "id": "camera_B80470A3_AF57_3775_418E_1ADC0771BDE0",
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 47.98,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -3.79,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 90,
   "yaw": -96.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticRotationSpeed": 12,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_B81740BD_AF57_374D_41BA_E0D975432720",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 160.11,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 }
], "children": [
 {
  "paddingLeft": 0,
  "paddingRight": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBorderRadius": 0,
  "progressBarOpacity": 1,
  "toolTipPaddingBottom": 4,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "minHeight": 50,
  "progressRight": 0,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipShadowOpacity": 1,
  "toolTipOpacity": 1,
  "toolTipBorderSize": 1,
  "playbackBarHeight": 10,
  "toolTipShadowVerticalLength": 0,
  "playbackBarBorderColor": "#FFFFFF",
  "toolTipTextShadowColor": "#000000",
  "playbackBarHeadWidth": 6,
  "class": "ViewerArea",
  "toolTipFontStyle": "normal",
  "playbackBarProgressBorderSize": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressBottom": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "paddingBottom": 0,
  "playbackBarRight": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "progressBorderSize": 0,
  "progressBarBorderSize": 0,
  "progressBarBorderRadius": 0,
  "minWidth": 100,
  "playbackBarProgressBorderRadius": 0,
  "paddingTop": 0,
  "transitionMode": "blending",
  "playbackBarOpacity": 1,
  "toolTipShadowSpread": 0,
  "toolTipShadowColor": "#333333",
  "toolTipShadowBlurRadius": 3,
  "progressBackgroundOpacity": 1,
  "toolTipFontColor": "#606060",
  "playbackBarBorderRadius": 0,
  "playbackBarHeadShadow": true,
  "shadow": false,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipPaddingRight": 6,
  "width": "100%",
  "playbackBarHeadBorderRadius": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipTextShadowOpacity": 0,
  "height": "100%",
  "toolTipPaddingTop": 4,
  "borderRadius": 0,
  "toolTipFontSize": 12,
  "playbackBarProgressOpacity": 1,
  "progressLeft": 0,
  "borderSize": 0,
  "playbackBarHeadBorderColor": "#000000",
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarLeft": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipPaddingLeft": 6,
  "toolTipBorderColor": "#767676",
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarBackgroundOpacity": 1,
  "playbackBarBorderSize": 0,
  "toolTipBorderRadius": 3,
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarHeadHeight": 15,
  "top": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadBorderSize": 0,
  "playbackBarHeadShadowColor": "#000000",
  "toolTipFontWeight": "normal",
  "id": "MainViewer",
  "toolTipTextShadowBlurRadius": 3,
  "progressBarBorderColor": "#000000",
  "toolTipShadowHorizontalLength": 0,
  "playbackBarHeadOpacity": 1,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "progressBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowHorizontalLength": 0,
  "progressHeight": 10,
  "left": 0,
  "progressBorderColor": "#000000",
  "playbackBarBottom": 5,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "toolTipFontFamily": "Arial",
  "progressOpacity": 1
 },
 {
  "paddingLeft": 0,
  "paddingRight": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBorderRadius": 0,
  "progressBarOpacity": 1,
  "toolTipPaddingBottom": 4,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "minHeight": 1,
  "progressRight": 0,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipShadowOpacity": 1,
  "toolTipOpacity": 1,
  "toolTipBorderSize": 1,
  "playbackBarHeight": 10,
  "toolTipShadowVerticalLength": 0,
  "playbackBarBorderColor": "#FFFFFF",
  "toolTipTextShadowColor": "#000000",
  "playbackBarHeadWidth": 6,
  "class": "ViewerArea",
  "toolTipFontStyle": "normal",
  "playbackBarProgressBorderSize": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressBottom": 2,
  "playbackBarBackgroundColorDirection": "vertical",
  "paddingBottom": 0,
  "playbackBarRight": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "progressBorderSize": 0,
  "progressBarBorderSize": 0,
  "progressBarBorderRadius": 0,
  "minWidth": 1,
  "playbackBarProgressBorderRadius": 0,
  "paddingTop": 0,
  "transitionMode": "fade_out_fade_in",
  "playbackBarOpacity": 1,
  "toolTipShadowSpread": 0,
  "toolTipShadowColor": "#333333",
  "toolTipShadowBlurRadius": 3,
  "progressBackgroundOpacity": 1,
  "toolTipFontColor": "#606060",
  "playbackBarBorderRadius": 0,
  "playbackBarHeadShadow": true,
  "shadow": false,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipPaddingRight": 6,
  "width": "21.649%",
  "playbackBarHeadBorderRadius": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipTextShadowOpacity": 0,
  "height": "23.625%",
  "toolTipPaddingTop": 4,
  "borderRadius": 0,
  "toolTipFontSize": 12,
  "playbackBarProgressOpacity": 1,
  "progressLeft": 0,
  "borderSize": 0,
  "playbackBarHeadBorderColor": "#000000",
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarLeft": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipPaddingLeft": 6,
  "toolTipBorderColor": "#767676",
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarBackgroundOpacity": 1,
  "playbackBarBorderSize": 0,
  "toolTipBorderRadius": 3,
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarHeadHeight": 15,
  "top": "1.94%",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadBorderSize": 0,
  "playbackBarHeadShadowColor": "#000000",
  "toolTipFontWeight": "normal",
  "id": "MapViewer",
  "toolTipTextShadowBlurRadius": 3,
  "progressBarBorderColor": "#000000",
  "toolTipShadowHorizontalLength": 0,
  "playbackBarHeadOpacity": 1,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "progressBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowHorizontalLength": 0,
  "progressHeight": 10,
  "left": "1.45%",
  "progressBorderColor": "#000000",
  "playbackBarBottom": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "toolTipFontFamily": "Arial",
  "progressOpacity": 1
 },
 {
  "scrollBarColor": "#000000",
  "paddingLeft": 20,
  "shadow": false,
  "paddingRight": 20,
  "scrollBarOpacity": 0.5,
  "height": "23.301%",
  "width": "26.178%",
  "minHeight": 1,
  "borderRadius": 0,
  "borderSize": 0,
  "scrollBarWidth": 10,
  "scrollBarMargin": 0,
  "class": "HTMLText",
  "top": "0%",
  "paddingBottom": 10,
  "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:37px;\"><B>Urban Duplex</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:18px;\"><B>Lumion Visualization</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;\">This project is still un Published, so it is a traning one to see the output of pano-tour tech.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;\">Copyrights for Arch : Khalid M.Ghazal</SPAN></SPAN></DIV></div>",
  "id": "HTMLText_BAC6953C_AF75_3953_41BF_65DD7DD4ACEF",
  "minWidth": 1,
  "paddingTop": 20,
  "backgroundOpacity": 0,
  "right": "0%",
  "scrollBarVisible": "rollOver"
 },
 {
  "paddingLeft": 0,
  "shadow": false,
  "paddingRight": 0,
  "maxHeight": 23,
  "toolTipPaddingRight": 6,
  "width": 23,
  "iconURL": "skin/IconButton_BAD132BD_AF75_1B4D_41D4_00F78BD6AFB3.png",
  "height": 23,
  "mode": "push",
  "toolTip": "Lumion Visualization Workgallery",
  "minHeight": 1,
  "transparencyActive": true,
  "toolTipPaddingTop": 4,
  "maxWidth": 23,
  "toolTipBorderSize": 1,
  "toolTipTextShadowOpacity": 0,
  "toolTipFontSize": 12,
  "toolTipShadowOpacity": 1,
  "toolTipOpacity": 1,
  "borderSize": 0,
  "toolTipPaddingBottom": 4,
  "borderRadius": 0,
  "toolTipShadowVerticalLength": 0,
  "toolTipPaddingLeft": 6,
  "toolTipBorderColor": "#767676",
  "toolTipTextShadowColor": "#000000",
  "class": "IconButton",
  "toolTipFontStyle": "normal",
  "toolTipBorderRadius": 3,
  "horizontalAlign": "center",
  "click": "this.shareFacebook(location.href)",
  "cursor": "hand",
  "paddingBottom": 0,
  "toolTipTextShadowBlurRadius": 3,
  "toolTipBackgroundColor": "#F6F6F6",
  "bottom": "1.78%",
  "toolTipFontWeight": "normal",
  "id": "IconButton_BAD132BD_AF75_1B4D_41D4_00F78BD6AFB3",
  "minWidth": 1,
  "toolTipShadowHorizontalLength": 0,
  "paddingTop": 0,
  "toolTipShadowSpread": 0,
  "toolTipShadowColor": "#333333",
  "toolTipShadowBlurRadius": 3,
  "left": "48.64%",
  "backgroundOpacity": 0,
  "toolTipFontColor": "#606060",
  "toolTipFontFamily": "Arial",
  "verticalAlign": "middle"
 }
], 
 "overflow": "visible",
 "paddingLeft": 0,
 "shadow": false,
 "paddingRight": 0,
 "mouseWheelEnabled": true,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "height": "100%",
 "width": "100%",
 "minHeight": 20,
 "borderRadius": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "vrPolyfillScale": 1,
 "horizontalAlign": "left",
 "class": "Player",
 "backgroundPreloadEnabled": true,
 "paddingBottom": 0,
 "scripts": {
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "registerKey": function(key, value){  window[key] = value; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio) delete audios[audio.get('id')]; } if(audio) audio.stop(); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "unregisterKey": function(key){  delete window[key]; },
  "existsKey": function(key){  return key in window; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "getKey": function(key){  return window[key]; },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } }
 },
 "id": "rootPlayer",
 "gap": 10,
 "minWidth": 20,
 "paddingTop": 0,
 "start": "this.mainPlayList.set('selectedIndex', 0); this.playList_B8279049_AF57_3732_41D0_ADC6DF4A06A3.set('selectedIndex', 0)",
 "verticalAlign": "top",
 "scrollBarVisible": "rollOver"
})