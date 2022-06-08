pipeline {
    agent { docker { image 'node:16.13.1-alpine' } }
    stages {
        stage('build') {
            steps {
                sh 'node --version'
                sh 'sudo chown -R 128:136 "/.npm"'
                sh 'npm i'
            }
        }
    }
}