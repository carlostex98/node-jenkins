pipeline {
    agent {
        docker {
            image 'node:15-alpine' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'chown -R 128:136 "/.npm"'
                sh 'npm install' 
            }
        }
    }
}