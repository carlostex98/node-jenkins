pipeline {
    agent {
        docker {
            image 'ubuntu'
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'sudo apt install nodejs'
                sh 'node -v' 
            }
        }
    }
}