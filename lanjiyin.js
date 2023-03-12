var body = $response.body;

body = body.replace(/"is_free":"0"/g, '"is_free":"1"');
body = body.replace(/"is_see":"0"/g, '"is_see":"1"');
body = body.replace(/"is_unlock":"0"/g, '"is_unlock":"1"');

$done({ body });
