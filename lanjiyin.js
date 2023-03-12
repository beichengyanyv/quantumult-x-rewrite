[
  {
    "type": "field",
    "pattern": "*.lanjiyin.com.cn",
    "method": "ALL",
    "destionation": "DIRECT",
    "rewrite": {
      "request": [
        {
          "type": "body",
          "match": "is_free\":\"0\"",
          "replace": "is_free\":\"1\""
        },
        {
          "type": "body",
          "match": "is_see\":\"0\"",
          "replace": "is_see\":\"1\""
        }
      ],
      "response": [
        {
          "type": "body",
          "match": "is_unlock\":\"0\"",
          "replace": "is_unlock\":\"1\""
        }
      ]
    }
  }
]
