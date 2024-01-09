---
layout: page
title: CAIQ
subtitle: "TBA"
permalink: /legal/security/caiq/
published: true
---
<style>
    th {
        display: none;
    }
</style>

We use the Consensus Assessments Initiative Questionnaire Lite (CAIQ-Lite) from the Cloud Security Alliance as a baseline mechanism to express our security posture in real terms and to provide security control transparency.

We’ve made this publicly available to help customers assess our security posture for their own vendor management initiatives. Please reach out to our security people over at security@glitchsecure.com if you have any queries.

# Audit and Assurance

| ID | Question | CSP CAIQ Answer |
| :--- | --- | --- |
| A&A-02.1 | Are independent audit and assurance assessments conducted according to relevant standards at least annually? | N/A |
| A&A-03.1 | Are independent audit and assurance assessments performed according to risk-based plans and policies? | |
| A&A-04.1 | Is compliance verified regarding all relevant standards, regulations, legal/contractual,and statutory requirements applicable to the audit? | |
| A&A-06.1 | Is a risk-based corrective action plan to remediate audit findings established,documented, approved, communicated, applied, evaluated, and maintained? | |

# Application & Interface Security

| ID | Question | CSP CAIQ Answer |
| :--- | --- | --- |
| A&A-06.2 | Is the remediation status of audit findings reviewed and reported to relevantstakeholders? | |
| AIS-02.1 | Are baseline requirements to secure different applications established, documented,and maintained? | |
| AIS-04.1 | Is an SDLC process defined and implemented for application design, development,deployment, and operation per organizationally designed security requirements? | |
| AIS-06.1 | Are strategies and capabilities established and implemented to deploy applicationcode in a secure, standardized, and compliant manner? | |
| AIS-06.2 | Is the deployment and integration of application code automated where possible? | |
| AIS-07.1 | Are application security vulnerabilities remediated following defined processes? | |
| AIS-07.2 | Is the remediation of application security vulnerabilities automated whenpossible? | |

# Business Continuity Mgmt & Op Resilience

| ID | Question | CSP CAIQ Answer |
| :--- | --- | --- |
| BCR-01.1 | Are business continuity management and operational resilience policies andprocedures established, documented, approved, communicated, applied, evaluated,and maintained? | |
| BCR-01.2 | Are the policies and procedures reviewed and updated at least annually? | |
| BCR-02.1 | Are criteria for developing business continuity and operational resiliencystrategies and capabilities established based on business disruption and riskimpacts? | |
| BCR-03.1 | Are strategies developed to reduce the impact of, withstand, and recover frombusiness disruptions in accordance with risk appetite? | |
| BCR-08.1 | Is cloud data periodically backed up? | |
| BCR-08.2 | Is the confidentiality, integrity, and availability of backup data ensured? | |
| BCR-08.3 | Can backups be restored appropriately for resiliency? | |
| BCR-09.1 | Is a disaster response plan established, documented, approved, applied, evaluated,and maintained to ensure recovery from natural and man-made disasters? | |
| BCR-09.2 | Is the disaster response plan updated at least annually, and when significantchanges occur? | |

# Change Control & Configuration Management

| ID | Question | CSP CAIQ Answer |
| :--- | --- | --- |
| CCC-01.1 | Are risk management policies and procedures associated with changing organizationalassets including applications, systems, infrastructure, configuration, etc., established,documented, approved, communicated, applied, evaluated and maintained (regardlessof whether asset management is internal or external)? | |
| CCC-01.2 | Are the policies and procedures reviewed and updated at least annually? | |
| CCC-02.1 | Is a defined quality change control, approval and testing process (with establishedbaselines, testing, and release standards) followed? | |
| CCC-04.1 | Is the unauthorized addition, removal, update, and management of organizationassets restricted? | |
| CCC-05.1 | Are provisions to limit changes that directly impact CSC-owned environmentsand require tenants to authorize requests explicitly included within the servicelevel agreements (SLAs) between CSPs and CSCs? | |
| CCC-06.1 | Are change management baselines established for all relevant authorized changeson organizational assets? | |
| CCC-07.1 | Are detection measures implemented with proactive notification if changesdeviate from established baselines? | |
| CCC-09.1 | Is a process to proactively roll back changes to a previously known "goodstate" defined and implemented in case of errors or security concerns? | |

# Cryptography, Encryption & Key Management

| ID | Question | CSP CAIQ Answer |
| :--- | --- | --- |
| CEK-01.1 | Are cryptography, encryption, and key management policies and procedures established,documented, approved, communicated, applied, evaluated, and maintained? | |
| CEK-01.2 | Are cryptography, encryption, and key management policies and procedures reviewedand updated at least annually? | |
| CEK-02.1 | Are cryptography, encryption, and key management roles and responsibilitiesdefined and implemented? | |
| CEK-03.1 | Are data at-rest and in-transit cryptographically protected using cryptographiclibraries certified to approved standards? | |
| CEK-04.1 | Are appropriate data protection encryption algorithms used that consider dataclassification, associated risks, and encryption technology usability? | |
| CEK-05.1 | Are standard change management procedures established to review, approve,implement and communicate cryptography, encryption, and key management technologychanges that accommodate internal and external sources? | |
| CEK-10.1 | Are cryptographic keys generated using industry-accepted and approved cryptographiclibraries that specify algorithm strength and random number generator specifications? | |
| CEK-12.1 | Are cryptographic keys rotated based on a cryptoperiod calculated while consideringinformation disclosure risks and legal and regulatory requirements? | |
| CEK-13.1 | Are cryptographic keys revoked and removed before the end of the establishedcryptoperiod (when a key is compromised, or an entity is no longer part of theorganization) per defined, implemented, and evaluated processes, procedures, andtechnical measures to include legal and regulatory requirement provisions? | |
| CEK-14.1 | Are processes, procedures and technical measures to destroy unneeded keysdefined, implemented and evaluated to address key destruction outside secure environments,revocation of keys stored in hardware security modules (HSMs), and include applicablelegal and regulatory requirement provisions? | |

# Datacenter Security

| ID | Question | CSP CAIQ Answer |
| :--- | --- | --- |
| DCS-03.1 | Are policies and procedures for maintaining a safe and secure working environment(in offices, rooms, and facilities) established, documented, approved, communicated,enforced, and maintained? | |
| DCS-03.2 | Are policies and procedures for maintaining safe, secure working environments(e.g., offices, rooms) reviewed and updated at least annually? | |
| DCS-05.1 | Is the classification and documentation of physical and logical assets basedon the organizational business risk? | |
| DCS-06.1 | Are all relevant physical and logical assets at all CSP sites cataloged andtracked within a secured system? | |

# Data Security & Privacy

| ID | Question | CSP CAIQ Answer |
| :--- | --- | --- |
| DSP-01.1 | Are policies and procedures established, documented, approved, communicated,enforced, evaluated, and maintained for the classification, protection, and handlingof data throughout its lifecycle according to all applicable laws and regulations,standards, and risk level? | |
| DSP-01.2 | Are data security and privacy policies and procedures reviewed and updatedat least annually? | |
| DSP-03.1 | Is a data inventory created and maintained for sensitive and personal information(at a minimum)? | |
| DSP-04.1 | Is data classified according to type and sensitivity levels? | |
| DSP-05.1 | Is data flow documentation created to identify what data is processed andwhere it is stored and transmitted? | |
| DSP-05.2 | Is data flow documentation reviewed at defined intervals, at least annually,and after any change? | |
| DSP-06.1 | Is the ownership and stewardship of all relevant personal and sensitive datadocumented? | |
| DSP-06.2 | Is data ownership and stewardship documentation reviewed at least annually? | |
| DSP-07.1 | Are systems, products, and business practices based on security principlesby design and per industry best practices? | |
| DSP-08.1 | Are systems, products, and business practices based on privacy principlesby design and according to industry best practices? | |
| DSP-08.2 | Are systems' privacy settings configured by default and according to all applicablelaws and regulations? | |
| DSP-10.1 | Are processes, procedures, and technical measures defined, implemented, andevaluated to ensure any transfer of personal or sensitive data is protected fromunauthorized access and only processed within scope (as permitted by respectivelaws and regulations)? | |
| DSP-11.1 | Are processes, procedures, and technical measures defined, implemented, andevaluated to enable data subjects to request access to, modify, or delete personaldata (per applicable laws and regulations)? | |
| DSP-12.1 | Are processes, procedures, and technical measures defined, implemented, andevaluated to ensure personal data is processed (per applicable laws and regulationsand for the purposes declared to the data subject)? | |
| DSP-13.1 | Are processes, procedures, and technical measures defined, implemented, andevaluated for the transfer and sub-processing of personal data within the servicesupply chain (according to any applicable laws and regulations)? | |
| DSP-14.1 | Are processes, procedures, and technical measures defined, implemented, andevaluated to disclose details to the data owner of any personal or sensitive dataaccess by sub-processors before processing initiation? | |
| DSP-16.1 | Do data retention, archiving, and deletion practices follow business requirements,applicable laws, and regulations? | |
| DSP-17.1 | Are processes, procedures, and technical measures defined and implementedto protect sensitive data throughout its lifecycle? | |
| DSP-19.1 | Are processes, procedures, and technical measures defined and implementedto specify and document physical data locations, including locales where datais processed or backed up? | |

# Governance, Risk Management & Compliance

| ID | Question | CSP CAIQ Answer |
| :--- | --- | --- |
| GRC-01.1 | Are information governance program policies and procedures sponsored by organizationalleadership established, documented, approved, communicated, applied, evaluated,and maintained? | |
| GRC-01.2 | Are the policies and procedures reviewed and updated at least annually? | |
| GRC-02.1 | Is there an established formal, documented, and leadership-sponsored enterpriserisk management (ERM) program that includes policies and procedures for identification,evaluation, ownership, treatment, and acceptance of cloud security and privacyrisks? | |
| GRC-06.1 | Are roles and responsibilities for planning, implementing, operating, assessing,and improving governance programs defined and documented? | |
| GRC-07.1 | Are all relevant standards, regulations, legal/contractual, and statutoryrequirements applicable to your organization identified and documented? | |

# Human Resources Security

| ID | Question | CSP CAIQ Answer |
| :--- | --- | --- |
| HRS-03.1 | Are policies and procedures requiring unattended workspaces to conceal confidentialdata established, documented, approved, communicated, applied, evaluated, andmaintained? | |
| HRS-03.2 | Are policies and procedures requiring unattended workspaces to conceal confidentialdata reviewed and updated at least annually? | |
| HRS-04.1 | Are policies and procedures to protect information accessed, processed, orstored at remote sites and locations established, documented, approved, communicated,applied, evaluated, and maintained? | |
| HRS-04.2 | Are policies and procedures to protect information accessed, processed, orstored at remote sites and locations reviewed and updated at least annually? | |
| HRS-11.1 | Is a security awareness training program for all employees of the organizationestablished, documented, approved, communicated, applied, evaluated and maintained? | |
| HRS-11.2 | Are regular security awareness training updates provided? | |

# Identity & Access Management

| ID | Question | CSP CAIQ Answer |
| :--- | --- | --- |
| IAM-01.1 | Are identity and access management policies and procedures established, documented,approved, communicated, implemented, applied, evaluated, and maintained? | |
| IAM-01.2 | Are identity and access management policies and procedures reviewed and updatedat least annually? | |
| IAM-03.1 | Is system identity information and levels of access managed, stored, and reviewed? | |
| IAM-04.1 | Is the separation of duties principle employed when implementing informationsystem access? | |
| IAM-05.1 | Is the least privilege principle employed when implementing information systemaccess? | |
| IAM-06.1 | Is a user access provisioning process defined and implemented which authorizes,records, and communicates data and assets access changes? | |
| IAM-07.1 | Is a process in place to de-provision or modify the access, in a timely manner,of movers / leavers or system identity changes, to effectively adopt and communicateidentity and access management policies? | |
| IAM-08.1 | Are reviews and revalidation of user access for least privilege and separationof duties completed with a frequency commensurate with organizational risk tolerance? | |
| IAM-09.1 | Are processes, procedures, and technical measures for the segregation of privilegedaccess roles defined, implemented, and evaluated such that administrative dataaccess, encryption, key management capabilities, and logging capabilities aredistinct and separate? | |
| IAM-10.1 | Is an access process defined and implemented to ensure privileged access rolesand rights are granted for a limited period? | |
| IAM-10.2 | Are procedures implemented to prevent the culmination of segregated privilegedaccess? | |
| IAM-14.1 | Are processes, procedures, and technical measures for authenticating accessto systems, application, and data assets including multifactor authenticationfor a least-privileged user and sensitive data access defined, implemented, andevaluated? | |
| IAM-14.2 | Are digital certificates or alternatives that achieve an equivalent securitylevel for system identities adopted? | |

# Interoperability & Portability

| ID | Question | CSP CAIQ Answer |
| :--- | --- | --- |
| IPY-01.1 | Are policies and procedures established, documented, approved, communicated,applied, evaluated, and maintained for communications between application services(e.g., APIs)? | |
| IPY-01.2 | Are policies and procedures established, documented, approved, communicated,applied, evaluated, and maintained for information processing interoperability? | |
| IPY-01.3 | Are policies and procedures established, documented, approved, communicated,applied, evaluated, and maintained for application development portability? | |
| IPY-01.4 | Are policies and procedures established, documented, approved, communicated,applied, evaluated, and maintained for information/data exchange, usage, portability,integrity, and persistence? | |
| IPY-01.5 | Are interoperability and portability policies and procedures reviewed andupdated at least annually? | |

# Infrastructure & Virtualization Security

| ID | Question | CSP CAIQ Answer |
| :--- | --- | --- |
| IVS-03.1 | Are communications between environments monitored? | |
| IVS-03.2 | Are communications between environments encrypted? | |
| IVS-03.3 | Are communications between environments restricted to only authenticated andauthorized connections, as justified by the business? | |
| IVS-03.4 | Are network configurations reviewed at least annually? | |
| IVS-03.5 | Are network configurations supported by the documented justification of allallowed services, protocols, ports, and compensating controls? | |
| IVS-04.1 | Is every host and guest OS, hypervisor, or infrastructure control plane hardened(according to their respective best practices) and supported by technical controlsas part of a security baseline? | |
| IVS-06.1 | Are applications and infrastructures designed, developed, deployed, and configuredsuch that CSP and CSC (tenant) user access and intra-tenant access is appropriatelysegmented, segregated, monitored, and restricted from other tenants? | |
| IVS-07.1 | Are secure and encrypted communication channels including only up-to-dateand approved protocols used when migrating servers, services, applications, ordata to cloud environments? | |
| IVS-09.1 | Are processes, procedures, and defense-in-depth techniques defined, implemented,and evaluated for protection, detection, and timely response to network-basedattacks? | |

# Logging & Monitoring

| ID | Question | CSP CAIQ Answer |
| :--- | --- | --- |
| LOG-01.1 | Are logging and monitoring policies and procedures established, documented,approved, communicated, applied, evaluated, and maintained? | |
| LOG-01.2 | Are policies and procedures reviewed and updated at least annually? | |
| LOG-04.1 | Is access to audit logs restricted to authorized personnel, and are recordsmaintained to provide unique access accountability? | |
| LOG-05.1 | Are security audit logs monitored to detect activity outside of typical orexpected patterns? | |
| LOG-05.2 | Is a process established and followed to review and take appropriate and timelyactions on detected anomalies? | |

# Sec. Incident Mgmt, E-Disc & Cloud Forensics

| ID | Question | CSP CAIQ Answer |
| :--- | --- | --- |
| SEF-03.1 | Is a security incident response plan that includes relevant internal departments,impacted CSCs, and other business-critical relationships (such as supply-chain)established, documented, approved, communicated, applied, evaluated, and maintained? | |
| SEF-04.1 | Is the security incident response plan tested and updated for effectiveness,as necessary, at planned intervals or upon significant organizational or environmentalchanges? | |
| SEF-07.1 | Are processes, procedures, and technical measures for security breach notificationsdefined and implemented? | |
| SEF-07.2 | Are security breaches and assumed security breaches reported (including anyrelevant supply chain breaches) as per applicable SLAs, laws, and regulations? | |

# Supply Chain Mgmt, Transparency & Accountability

| ID | Question | CSP CAIQ Answer |
| :--- | --- | --- |
| STA-02.1 | Is the SSRM applied, documented, implemented, and managed throughout the supplychain for the cloud service offering? | |
| STA-04.1 | Is the shared ownership and applicability of all CSA CCM controls delineatedaccording to the SSRM for the cloud service offering? | |
| STA-07.1 | Is an inventory of all supply chain relationships developed and maintained? | |

# Threat & Vulnerability Management

| ID | Question | CSP CAIQ Answer |
| :--- | --- | --- |
| TVM-02.1 | Are policies and procedures to protect against malware on managed assets established,documented, approved, communicated, applied, evaluated, and maintained? | |
| TVM-02.2 | Are asset management and malware protection policies and procedures reviewedand updated at least annually? | |
| TVM-03.1 | Are processes, procedures, and technical measures defined, implemented, andevaluated to enable scheduled and emergency responses to vulnerability identifications(based on the identified risk)? | |
| TVM-04.1 | Are processes, procedures, and technical measures defined, implemented, andevaluated to update detection tools, threat signatures, and compromise indicatorsweekly (or more frequent) basis? | |
| TVM-07.1 | Are processes, procedures, and technical measures defined, implemented, andevaluated for vulnerability detection on organizationally managed assets at leastmonthly? | |
| TVM-09.1 | Is a process defined and implemented to track and report vulnerability identificationand remediation activities that include stakeholder notification? | |

# Universal EndPoint Management

| ID | Question | CSP CAIQ Answer |
| :--- | --- | --- |
| UEM-02.1 | Is there a defined, documented, applicable and evaluated list containing approvedservices, applications, and the sources of applications (stores) acceptable foruse by endpoints when accessing or storing organization-managed data? | |
| UEM-04.1 | Is an inventory of all endpoints used and maintained to store and access companydata? | |
| UEM-05.1 | Are processes, procedures, and technical measures defined, implemented andevaluated, to enforce policies and controls for all endpoints permitted to accesssystems and/or store, transmit, or process organizational data? | |
| UEM-06.1 | Are all relevant interactive-use endpoints configured to require an automaticlock screen? | |
| UEM-09.1 | Are anti-malware detection and prevention technology services configured onmanaged endpoints? | |
| UEM-10.1 | Are software firewalls configured on managed endpoints? | |
| UEM-13.1 | Are processes, procedures, and technical measures defined, implemented, andevaluated to enable remote company data deletion on managed endpoint devices? | |
