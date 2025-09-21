pipeline{
    agent any

    environment {
        EC2_USR = 'ec2-user'
        EC2_IP  = '18.224.69.204'
        BUILD_DIR = 'dist'
    }
    stages{
        stage('Checkout'){
            steps {
                git branch: 'dev', url: 'https://github.com/LGzzus/Portfolio_JASG.git'
            }
        }
        stage('Build'){
            steps{
                sh '''
                    npm install
                    npm run build
                '''
            }
        }
        stage('Deploy to EC2'){
            steps{
                sshagent(['ec2-user']){
                    sh '''
                      scp -o StrictHostKeyChecking=no -r $BUILD_DIR/* $EC2_USR@$EC2_IP:/var/www/html/
                      ssh -o StrictHostKeyChecking=no $EC2_USR@$EC2_IP "sudo systemctl restart nginx"
                    '''
                }
            }
        }
    }
}