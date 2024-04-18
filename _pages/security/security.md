---
layout: page
title: GlitchSecure's Security Details
subtitle: "A look at our security policies, practices, and procedures as a cybersecurity company."
permalink: /security/
published: true
sitemap: false
---

# Introduction

As a cybersecurity company, we recognize the importance of solid security practices. As a small team, our success relies on earning and keeping your trust.

With that in mind, we take security extremely seriously and have built our platform and procedures with security as a top priority. This document aims to highlight some of our security practices and policies.


# Access Control & Organizational Security

## Personnel

- All employees and contractors sign an NDA before gaining access to sensitive information.
- All employees and contractors are required to utilise full disk encryption.
- We maintain a large collection of internal documentation to outline policies and procedures for day-to-day company operations.

## Authentication

- Unique logins are used for all business critical systems.
- SSO, MFA, and key-based authentication are used whenever possible.
- A password manager with randomly generated passwords is used whenever SSO is not available.
- We operate a "zero-trust" network and utilise both Tailscale and Cloudflare Access to enforce this.


## Data Collection & Access

- Customer and personal data collection is limited to only that which is required, as outlined in our [privacy policy](/legal/privacy).
- Access to our systems and data is limited to only those who need it, operating on the principle of least privilege by design.

# Servers & Storage

Unlike many companies, we rely very little on public cloud infrastructure. Instead, the majority of our infrastructure, including our platform, is hosted on dedicated servers that we own or control. These servers are located either within managed data centers such as OVH or within our office in Winnipeg.

All servers utilise RAID mirroring, redundant power supplies, rack-mounted battery backups, and dedicated network connections with multiple ISPs to limit the impact of failures.

| Provider | Geo Location | Use case |
| HQ (dc-wpg) | Winnipeg, MB, Canada | Internal and Development Systems. Security Testing Tools |
| OVH (dc-ovh) | Beauharnois, QC, Canada | Production and Staging Systems |

Additional backup, monitoring, and egress providers can be found in our [vendor list](/legal/vendors).

## Backups

We take backups very seriously and follow the 3-2-1 rule, ensuring we have at least three copies of all data stored on at least two mediums, with at least one offsite.

- All backups are encrypted client-side with AES-256 in GCM mode.
- All servers are backed up nightly to an onsite backup server utilising RAID.
- Backups are mirrored nightly across our two primary data centers.
- Backups are mirrored weekly across two separate and independent backup storage providers.
- Backups are retained for up to one year.
- Backups of business critical infrastructure —such as our platform's database— are performed hourly.

## Encryption

We try to go above and beyond with encryption, often implementing multiple layers of encryption for sensitive data.

- All data is encrypted in transit.
- All data and backups are encrypted at rest, utilising _both_ full disk and file-level encryption whenever possible.
- All sensitive data stored within our platform database is also encrypted and is decrypted on-the-fly when data is requested.

## Management, Monitoring, and Updates

- We utilise auto-updates whenever possible and perform regular update maintenance across all servers and software.
- We utilise a status monitoring tool hosted in an isolated cloud provider to detect and alert us to downtime. This can be accessed at [status.glitchsecure.com](https://status.glitchsecure.com/)
- We utilise notification systems provided by our infrastructure tooling to alert us of hardware and process failures, such as a backup failing, power outage, or bad drive.

# Security Testing

## Asset Discovery

- We utilise third-party certificate monitoring for all our web assets to detect all new SSL certificates issued.
- We utilise third-party asset monitoring and subdomain scanning tools to alert us anytime a new subdomain is created for one of our primary domains.
- We utilise third-party network scanning tooling to alert us of any changes to our external network.

## DAST & Vulnerability Scanning

- We utilise our own suite of DAST and vulnerability scanning tools internally to test and identify software vulnerabilities on our platform and internal tooling.
- We perform regular internal penetration testing of our applications and new features.
- We occasionally hire third-party penetration testers to perform additional penetration testing of our networks and applications.

## SCA & SAST

- We utilise providers such as Github and Snky to scan our code for vulnerabilities and track dependencies.
- We utilise linting and code styling checks that are enforced through branch rules on all pull requests.

## Vulnerability Disclosure Policy

- We welcome all security reports in accordance with our published here: [https://handbook.glitchsecure.com/s/vdp](https://handbook.glitchsecure.com/s/vdp)
