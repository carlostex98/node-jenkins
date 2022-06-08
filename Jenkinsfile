pipeline {
    agent {
        docker {
            image 'ubuntu'
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'apt install nodejs'
                sh 'node -v' 
            }
        }
    }
}