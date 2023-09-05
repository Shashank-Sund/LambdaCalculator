import json
import boto3
import datetime as dt
import time as tm
import uuid

def lambda_handler(event, context):
    
    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table('calculator_expressions')
    
    # Simple calculate function
    def calculate(expression):
        try:
            result = eval(expression)
            return result
        except Exception as e:
            return 'This expression is unsolvable.'
    
    expid = 'EXP' + str(uuid.uuid4()) # unique identifier
    expression = event['equation']  # Expression to be solved
    result = calculate(expression) # result of expression
    dtnow = dt.datetime.fromtimestamp(tm.time())
    date = '{}-{}-{}'.format(dtnow.year,dtnow.month,dtnow.day) # created date variable

    # put item in dynamodb table
    response = table.put_item(
        Item={
            'expID': expid,
            'expression': expression,
            'answer': result,
            'date': date
        })
    
    # return result
    return {
        'statusCode': 200,
        'body': json.dumps("Your expression {}={} has been saved successfully!".format(expression, result))
    }
