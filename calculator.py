import json

def lambda_handler(event, context):
    
    # Simple calculate function
    def calculate(expression):
        try:
            result = eval(expression)
            return result
        except Exception as e:
            return 'This expression is unsolvable.'
    
    # Expression to be solved
    expression = event['equation']
    # result of expression
    result = calculate(expression)
    # print for lambda logs
    print(f"Result: {result}")
    
    # return result
    return {
        'statusCode': 200,
        'body': json.dumps(result)
    }
