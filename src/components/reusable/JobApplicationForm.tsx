
import React, { useState } from 'react';

interface JobApplicationFormProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle: string;
  jobId: string;
}

const JobApplicationForm: React.FC<JobApplicationFormProps> = ({ isOpen, onClose, jobTitle, jobId }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    linkedin: '',
    portfolio: '',
    experience: '',
    coverLetter: '',
    resume: null as File | null,
    availability: '',
    salary: '',
    relocate: '',
    noticePeriod: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isDragOver, setIsDragOver] = useState(false);
  const [fileInputKey, setFileInputKey] = useState(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('File input changed:', e.target.files);
    const file = e.target.files?.[0] || null;
    console.log('Selected file:', file);
    
    if (file) {
      console.log('File details:', {
        name: file.name,
        size: file.size,
        type: file.type,
        lastModified: file.lastModified
      });
    }
    
    processFile(file);
  };

  const processFile = (file: File | null) => {
    if (file) {
      // Check file size (10MB limit)
      const maxSize = 10 * 1024 * 1024; // 10MB in bytes
      if (file.size > maxSize) {
        alert('File size must be less than 10MB');
        return;
      }
      
      // Check file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        alert('Please upload a PDF, DOC, or DOCX file');
        return;
      }
      
      console.log('File selected:', file.name, 'Size:', file.size, 'Type:', file.type);
    }
    
    setFormData(prev => ({
      ...prev,
      resume: file
    }));
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      processFile(files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Use Formspree for job application submission
      const response = await fetch('https://formspree.io/f/xovnopdr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subject: `Job Application: ${jobTitle}`,
          email: formData.email,
          message: `
Job Application Details:
- Job Title: ${jobTitle}
- Job ID: ${jobId}
- Name: ${formData.firstName} ${formData.lastName}
- Email: ${formData.email}
- Phone: ${formData.phone}
- LinkedIn: ${formData.linkedin}
- Portfolio: ${formData.portfolio}
- Experience: ${formData.experience}
- Cover Letter: ${formData.coverLetter}
- Availability: ${formData.availability}
- Expected Salary: ${formData.salary}
- Willing to Relocate: ${formData.relocate}
- Notice Period: ${formData.noticePeriod}
- Resume: ${formData.resume ? formData.resume.name : 'No file uploaded'}
          `
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setTimeout(() => {
          onClose();
          setSubmitStatus('idle');
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            linkedin: '',
            portfolio: '',
            experience: '',
            coverLetter: '',
            resume: null,
            availability: '',
            salary: '',
            relocate: '',
            noticePeriod: ''
          });
        }, 2000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 3000);
      }
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div className="bg-[#1E293B] rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/10">
        {/* Header */}
        <div className="sticky top-0 bg-[#1E293B] border-b border-white/10 px-8 py-6 rounded-t-3xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-[#e7e7e7]">Apply for {jobTitle}</h2>
              <p className="text-[#94A3B8] mt-1">Join our team and make an impact</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <svg className="w-6 h-6 text-[#94A3B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8">
          {submitStatus === 'success' ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-[#10b981] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#e7e7e7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#e7e7e7] mb-2">Application Submitted!</h3>
              <p className="text-[#94A3B8]">Thank you for your interest. We'll review your application and get back to you soon.</p>
            </div>
          ) : submitStatus === 'error' ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-[#ef4444] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#e7e7e7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#e7e7e7] mb-2">Submission Failed</h3>
              <p className="text-[#94A3B8]">Please try again or contact us directly.</p>
            </div>
          ) : (
            <>
              {/* Personal Information */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-[#e7e7e7] mb-4">Personal Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#e7e7e7] mb-2">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-[#0A0A0A] border border-white/20 rounded-xl text-[#e7e7e7] placeholder-[#94A3B8] focus:ring-2 focus:ring-[#3B82F6] focus:border-[#3B82F6] transition-colors"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#e7e7e7] mb-2">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-[#0A0A0A] border border-white/20 rounded-xl text-[#e7e7e7] placeholder-[#94A3B8] focus:ring-2 focus:ring-[#3B82F6] focus:border-[#3B82F6] transition-colors"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-sm font-medium text-[#e7e7e7] mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-[#0A0A0A] border border-white/20 rounded-xl text-[#e7e7e7] placeholder-[#94A3B8] focus:ring-2 focus:ring-[#3B82F6] focus:border-[#3B82F6] transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#e7e7e7] mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-[#0A0A0A] border border-white/20 rounded-xl text-[#e7e7e7] placeholder-[#94A3B8] focus:ring-2 focus:ring-[#3B82F6] focus:border-[#3B82F6] transition-colors"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>
              </div>

              {/* Professional Information */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-[#e7e7e7] mb-4">Professional Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#e7e7e7] mb-2">LinkedIn Profile</label>
                    <input
                      type="url"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-[#0A0A0A] border border-white/20 rounded-xl text-[#e7e7e7] placeholder-[#94A3B8] focus:ring-2 focus:ring-[#3B82F6] focus:border-[#3B82F6] transition-colors"
                      placeholder="https://linkedin.com/in/yourprofile"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#e7e7e7] mb-2">Portfolio/Website</label>
                    <input
                      type="url"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-[#0A0A0A] border border-white/20 rounded-xl text-[#e7e7e7] placeholder-[#94A3B8] focus:ring-2 focus:ring-[#3B82F6] focus:border-[#3B82F6] transition-colors"
                      placeholder="https://yourportfolio.com"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium text-[#e7e7e7] mb-2">Years of Experience *</label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#0A0A0A] border border-white/20 rounded-xl text-[#e7e7e7] focus:ring-2 focus:ring-[#3B82F6] focus:border-[#3B82F6] transition-colors"
                  >
                    <option value="">Select experience level</option>
                    <option value="0-1">0-1 years</option>
                    <option value="2-3">2-3 years</option>
                    <option value="4-5">4-5 years</option>
                    <option value="6-10">6-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>
              </div>

              {/* Resume Upload */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-[#e7e7e7] mb-4">Resume</h3>
                <div 
                  className={`border-2 border-dashed rounded-xl p-6 text-center transition-colors bg-[#0A0A0A] ${
                    isDragOver 
                      ? 'border-[#3B82F6] bg-[#3B82F6]/10' 
                      : 'border-white/20 hover:border-[#3B82F6]'
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <input
                    key={fileInputKey}
                    type="file"
                    name="resume"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    className="hidden"
                    id="resume-upload"
                  />
                  
                  <svg className="w-12 h-12 text-[#94A3B8] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  
                  {formData.resume ? (
                    <div>
                      <p className="text-[#10b981] font-medium mb-1">✓ {formData.resume.name}</p>
                      <p className="text-[#94A3B8] text-xs mt-1">Size: {(formData.resume.size / 1024 / 1024).toFixed(2)} MB</p>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setFileInputKey(prev => prev + 1); // Reset the input
                          setTimeout(() => {
                            const input = document.getElementById('resume-upload') as HTMLInputElement;
                            if (input) {
                              input.click();
                            }
                          }, 100);
                        }}
                        className="mt-3 px-4 py-2 text-white text-sm rounded-lg border border-white/20 transition-colors hover:bg-[#2563eb]"
                        style={{ backgroundColor: '#3B82F6' }}
                      >
                        Change File
                      </button>
                    </div>
                  ) : (
                    <div>
                      <p className="text-[#e7e7e7] font-medium mb-1">
                        {isDragOver ? 'Drop your resume here' : 'Upload your resume'}
                      </p>
                      <p className="text-[#94A3B8] text-sm mb-3">PDF, DOC, or DOCX (Max 10MB)</p>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setFileInputKey(prev => prev + 1); // Reset the input
                          setTimeout(() => {
                            const input = document.getElementById('resume-upload') as HTMLInputElement;
                            if (input) {
                              input.click();
                            }
                          }, 100);
                        }}
                        className="px-6 py-3 text-white font-medium rounded-lg border border-white/20 transition-colors hover:bg-[#2563eb]"
                        style={{ backgroundColor: '#3B82F6' }}
                      >
                        Choose File
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Cover Letter */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-[#e7e7e7] mb-4">Cover Letter</h3>
                <textarea
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-[#0A0A0A] border border-white/20 rounded-xl text-[#e7e7e7] placeholder-[#94A3B8] focus:ring-2 focus:ring-[#3B82F6] focus:border-[#3B82F6] transition-colors resize-none"
                  placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                />
              </div>

              {/* Additional Information */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-[#e7e7e7] mb-4">Additional Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#e7e7e7] mb-2">Availability</label>
                    <select
                      name="availability"
                      value={formData.availability}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-[#0A0A0A] border border-white/20 rounded-xl text-[#e7e7e7] focus:ring-2 focus:ring-[#3B82F6] focus:border-[#3B82F6] transition-colors"
                    >
                      <option value="">Select availability</option>
                      <option value="immediate">Immediate</option>
                      <option value="2-weeks">2 weeks notice</option>
                      <option value="1-month">1 month notice</option>
                      <option value="2-months">2+ months notice</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#e7e7e7] mb-2">Expected Salary</label>
                    <input
                      type="text"
                      name="salary"
                      value={formData.salary}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-[#0A0A0A] border border-white/20 rounded-xl text-[#e7e7e7] placeholder-[#94A3B8] focus:ring-2 focus:ring-[#3B82F6] focus:border-[#3B82F6] transition-colors"
                      placeholder="e.g., $80,000 - $100,000"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-sm font-medium text-[#e7e7e7] mb-2">Willing to Relocate?</label>
                    <select
                      name="relocate"
                      value={formData.relocate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-[#0A0A0A] border border-white/20 rounded-xl text-[#e7e7e7] focus:ring-2 focus:ring-[#3B82F6] focus:border-[#3B82F6] transition-colors"
                    >
                      <option value="">Select option</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                      <option value="maybe">Maybe</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#e7e7e7] mb-2">Notice Period</label>
                    <input
                      type="text"
                      name="noticePeriod"
                      value={formData.noticePeriod}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-[#0A0A0A] border border-white/20 rounded-xl text-[#e7e7e7] placeholder-[#94A3B8] focus:ring-2 focus:ring-[#3B82F6] focus:border-[#3B82F6] transition-colors"
                      placeholder="e.g., 2 weeks, 1 month"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-3 border border-white/20 text-[#94A3B8] hover:text-[#e7e7e7] hover:border-white/30 rounded-xl transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 text-white font-semibold rounded-xl border border-white/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center hover:bg-[#2563eb] focus:outline-none focus:ring-2 focus:ring-white/80"
                  style={{ backgroundColor: '#3B82F6' }}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    'Submit Application'
                  )}
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default JobApplicationForm;
