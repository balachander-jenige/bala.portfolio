window.PORTFOLIO = window.PORTFOLIO || {};

// Newest first. Every job also appears in the "Life so far..." timeline.
// Write "period" as "<Month> <Year> – <Month> <Year>" or "<Month> <Year> – Present".
PORTFOLIO.experience = [
  {
    role: "Full Stack Engineer (MLOps)",
    company: "NUS Fintech Lab",
    location: "Singapore",
    period: "March 2026 – Present",
    points: [
      "Developed a CI/CD pipeline using DevSecOps principles for two Go microservices, improving security and speeding up releases to dev and prod by 60%.",
      "Built and provisioned cloud infrastructure with Terraform and deployed services on EKS, configuring the metrics server to scale on load.",
      "Architected the application networking (VPC, subnets, IGW, security groups) following AWS security best practices.",
      "Designed and implemented an end-to-end MLOps pipeline (XGBoost) covering model training, versioning, deployment, serving, scaling and lifecycle management.",
      "Implemented KServe-based model serving, using standardised inference APIs and cloud-native model deployment patterns."
    ]
  },
  {
    role: "DevOps Automation Associate",
    company: "NUS Information Technology",
    location: "Singapore",
    period: "October 2025 – January 2026",
    points: [
      "Developed and validated Ansible-based RHEL CIS hardening playbooks on Linux test servers to ensure correctness and stability."
    ]
  },
  {
    role: "AWS Cloud & DevOps Engineer",
    company: "Hitachi Vantara",
    location: "",
    period: "September 2023 – August 2025",
    description: "A global technology company specialising in data storage, infrastructure, hybrid cloud and digital transformation solutions.",
    points: [
      "Engineered an automated tagging framework with Terraform that applies ownership, cost-centre and compliance tags to all new EC2 instances across enterprise-wide AWS & GCP environments, eliminating 100% of manual tagging.",
      "Managed code and infrastructure deployment with GitHub Actions for the internal marketplace, and configured Kubernetes manifests to scale the application for 5,000 concurrent users.",
      "Designed a cross-account EC2 compliance system that detects unmanaged instances and notifies owners, improving security and SSM coverage.",
      "Implemented IAM least-privilege policies across 150+ AWS accounts, minimising misconfigurations and audit findings.",
      "Conducted AWS Well-Architected and security audits, delivering cost and security recommendations adopted in production that reduced enterprise clients' cloud costs by 20%."
    ]
  }
];
