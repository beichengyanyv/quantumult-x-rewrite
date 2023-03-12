{
  "created_at": 1675240717240,
  "updated_at": 1678090082249,
  "locked": 0,
  "mitm": 0,
  "enabled": 1,
  "name": "蓝基因",
  "paths": [
    {
      "method": "ALL",
      "schema": "ALL",
      "rules": [
        {
          "serverFile": "",
          "regularExpression": 0,
          "modifyValue": "is_free\":\"1\"",
          "mockType": "local",
          "matchKey": "is_free\":\"0\"",
          "tempFile": "",
          "mockFileType": 0,
          "mode": "regular",
          "regularAction": "modifyBody",
          "headerAction": "add",
          "localFile": "",
          "redirectCode": "code302",
          "type": "request"
        },
        {
          "regularExpression": 1,
          "headerAction": "add",
          "matchKey": "is_see\":\"0\"",
          "mockType": "local",
          "redirectCode": "code302",
          "tempFile": "",
          "regularAction": "modifyBody",
          "mockFileType": 0,
          "mode": "regular",
          "modifyValue": "is_see\":\"1\"",
          "localFile": "",
          "serverFile": "",
          "type": "request"
        },
        {
          "mockFileType": 0,
          "regularAction": "modifyBody",
          "regularExpression": 1,
          "tempFile": "",
          "mockType": "local",
          "headerAction": "add",
          "modifyValue": "is_unlock\":\"1\"",
          "type": "response",
          "localFile": "",
          "redirectCode": "code302",
          "mode": "regular",
          "serverFile": "",
          "matchKey": "is_unlock\":\"0\""
        }
      ],
      "pathMode": 0,
      "regrexPath": "*.lanjiyin.com.cn",
      "host": "*.lanjiyin.com.cn",
      "port": "",
      "path": "",
      "query": ""
    }
  ]
}
