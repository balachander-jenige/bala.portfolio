window.PORTFOLIO = window.PORTFOLIO || {};

// "url" and "period" are optional. Leave url as "" until you have a link.
PORTFOLIO.projects = [
  {
    title: "MLOps End-to-End Pipeline (Churn Prediction)",
    url: "",
    period: "",
    points: [
      "Deployed and operated ML inference on Amazon EKS using KServe, with Argo CD GitOps, AWS IAM/IRSA and Traefik for automated, secure, Kubernetes-native model deployment.",
      "Developed an MLOps pipeline using GitHub Actions, DVC and Amazon S3 to automate model training, version ML artifacts and enable reproducible model delivery."
    ],
    tags: ["EKS", "KServe", "ArgoCD", "DVC", "GitHubActions"]
  },
  {
    title: "Freelancer Marketplace (Capstone Project)",
    url: "",
    period: "September 2025 – October 2025",
    points: [
      "Collaborated with a team of four developers and led the design and implementation of independently deployed FastAPI backend microservices providing REST APIs for service listings, authentication and orders.",
      "Managed AWS infrastructure with Terraform, provisioning VPCs, EKS clusters, IAM roles, security groups, load balancers and S3 state storage across multi-AZ environments for 98% availability and resilience.",
      "Built CI/CD pipelines with GitHub Actions covering unit tests, SAST/DAST security scans, integration testing and Docker image builds pushed to AWS ECR, improving release efficiency by 40%.",
      "Orchestrated microservices on AWS EKS with zero-downtime deployments, pod autoscaling and load-balanced API requests, monitored with CloudWatch."
    ],
    tags: ["FastAPI", "Terraform", "EKS", "Docker", "DevSecOps"]
  }
];
