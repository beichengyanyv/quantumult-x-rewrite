var body = $request.body;
body = body.replace(/is_free\\\":\\\"0\\\"/, "is_free\\\":\\\"1\\\"");
body = body.replace(/is_see\\\":\\\"0\\\"/, "is_see\\\":\\\"1\\\"");
body = body.replace(/is_unlock\\\":\\\"0\\\"/, "is_unlock\\\":\\\"1\\\"");
$done({body: body});
