# LambdaCalculator

This app is a simple calculator app hosted on AWS. The webpages are stored in a private S3 bucket and web pages are served through a CloudFront Distribution. Caching is used in the CloudFront distribution for a faster user experience and for users to access webpages quicker. The web content can only be accessed publicy through the CloudFront distribution as defined in the bucket policy.

# Architecture

![LambdaCalculatorArchitecture](https://github.com/Shashank-Sund/LambdaCalculator/assets/29733360/eeec7308-cb5d-46a8-b9ef-b1554402b0d5)

# Feature - Solve Function

The solve function uses an API Gateway url to send a synchronous post request with an expression string for a backend lambda to solve. CORS headers are enabled for Cross-Origin referencing on the API url. The Lambda function is envoked through the API url request, and executes functionality for the calculator solve function. The response is returned with code 200.

AWS Tools used: CloudFront, S3, API Gateway, Lambda

# Feature - Save Function (Incomplete)

The save function uses an API Gateway url to send a synchronous post request with an expression string for a backend lambda to solve and save to a dynamodb database. CORS headers are enabled for Cross-Origin referencing on the API url. The IAM role in which the lambda is using has been modified to allow certain actions on the existing dynamodb. The Lambda function is envoked through the API url request, and executes functionality for the calculator save function. The response is returned with code 200.

AWS Tools used: CloudFront, S3, IAM, API Gateway, Lambda, DynamoDB
