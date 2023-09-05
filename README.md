# LambdaCalculator

This app is a simple calculator app hosted on AWS. The webpages are stored in a private S3 bucket and web pages are served through a CloudFront Distribution. Caching is used in the CloudFront distribution for a faster user experience and for users to access webpages quicker. The web content can only be accessed publicy through the CloudFront distribution as defined in the bucket policy.

# Feature - Solve Function

The solve function uses an API Gateway url to send a synchronous post request with an expression string for the backend lambda to solve. CORS headers are enabled for Cross-Origin referencing on the API url. The Lambda function is envoked through the API url request, and executes functionality for the calculator solve function. The response is returned with code 200.

AWS Tools used: CloudFront, S3, IAM, API Gateway, Lambda
