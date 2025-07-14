<script lang="ts">
	import { config } from "$lib/config";
	import toast, { Toaster } from 'svelte-french-toast';

  let form: HTMLFormElement;
  let imageInputs = $state([1]);
  let uploadedFiles = $state<Record<number, File | null>>({});
  const maxInputs = 5;
  const maxFileSize = 5 * 1024 * 1024; // 5MB in bytes

  function addImageInput() {
    if (imageInputs.length < maxInputs) {
      imageInputs = [...imageInputs, Math.max(...imageInputs) + 1];
    }
  }

  function removeImageInput(inputId: number) {
    if (imageInputs.length > 1) {
      imageInputs = imageInputs.filter(id => id !== inputId);
      // Also remove the uploaded file for this input
      delete uploadedFiles[inputId];
      uploadedFiles = { ...uploadedFiles };
    }
  }

  function handleFileUpload(inputId: number, event: Event) {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0] || null;
    
    if (file) {
      if (checkFileSize(inputId, file)) {
        uploadedFiles[inputId] = file;
        uploadedFiles = { ...uploadedFiles };
      } else {
        uploadedFiles[inputId] = null;
        uploadedFiles = { ...uploadedFiles };
      }
    } else {
      uploadedFiles[inputId] = null;
      uploadedFiles = { ...uploadedFiles };
    }
  }

  function removeUploadedFile(inputId: number) {
    uploadedFiles[inputId] = null;
    uploadedFiles = { ...uploadedFiles };
    
    const fileInput = document.getElementById(`images-${inputId}`) as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
  }

  function checkFileSize(inputId: number, file: File): boolean {
    if (file.size > maxFileSize) {
      const maxSizeMB = maxFileSize / (1024 * 1024);
      toast.error(`File size exceeds ${maxSizeMB}MB. Please choose a smaller file.`);
      // alert(`File size exceeds ${maxSizeMB}MB. Please choose a smaller file.`);
      
      const fileInput = document.getElementById(`images-${inputId}`) as HTMLInputElement;
      if (fileInput) {
        fileInput.value = '';
      }
      
      return false;
    }
    return true;
  }

  async function onsubmit(event: { preventDefault: () => void; target: any; }) {
    event.preventDefault();

    const myForm = form;
    const formData = new FormData(myForm);
    const data = Array.from(formData.entries()).map(([k, v]) => [k, typeof v === 'string' ? v : String(v)]);

    const res = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(data).toString()
    });

    if (res.ok) {
      toast.success("Form successfully submitted!");
    } else {
      toast.error("Error submitting form");
    }
  };
</script>

<section id="contact">
  <div class="inner text-center">
    <h2>Interested in Ordering?</h2>
    <p>Fill out the form below and one of our reps will contact you shortly!</p>
    <p class="text-phone text-primary text-xl">{config.contact.phone.numberFormatted}</p>

    <form id="contact-form" name="contact" method="POST" data-netlify="true" {onsubmit} bind:this={form}>
      <fieldset>
        <legend class="text-center">Inquire</legend>
        <div class="form-group">
          <p class="form-input">
            <label for="firstname">First Name:</label>
            <input type="text" id="firstname" name="firstname" placeholder="" required/>
          </p>
          <p class="form-input">
            <label for="lastname">Last Name:</label>
            <input type="text" id="lastname" name="lastname" placeholder=""/>
          </p>
        </div>
        <div class="form-group">
          <p class="form-input">
            <label for="email">Your Email:</label>
            <input type="email" id="email" name="email" placeholder="" pattern={"[a-z0-9._%+\\-]+@[a-z0-9.\\-]+\\.[a-z]{2,4}$"} title="Please enter a valid email address" required/>
          </p>
        </div>
        <div class="form-group">
          <p class="form-input">
            <label for="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" placeholder="" required />
          </p>
          <p class="form-input">
            <label for="eventdate">Date of Event:</label>
            <input type="date" id="eventdate" name="eventdate" required />
          </p>
        </div>
        <div class="form-group">
          <p class="form-input">
            <label for="guestcount">Number of Guests:</label>
            <input type="number" id="guestcount" name="guestcount" placeholder="" min="1" />
          </p>
          <p class="form-input">
            <label for="eventlocation">Event Location:</label>
            <input type="text" id="eventlocation" name="eventlocation" placeholder="" />
          </p>
        </div>
        <div class="form-group">
          <p class="form-input">
            <label for="message">Tell us about your event:</label>
            <textarea id="message" name="message" placeholder="" required></textarea>
          </p>
        </div>
        <h3 class="text-center">Inspo pics? Upload here!</h3>
        {#each imageInputs as inputId, index}
          <div class="form-group images-upload">
            <div class="image-input-group">
              <p class="form-input">
                <input 
                  type="file" 
                  id="images-{inputId}" 
                  name="images" 
                  accept="image/*" 
                  style="display: none;" 
                  onchange={(e) => handleFileUpload(inputId, e)}
                />
                <label for="images-{inputId}" class="btn btn-lg file-upload-btn">
                  {uploadedFiles[inputId] ? 'Change Image' : `Upload Image ${index + 1}`}
                </label>
              </p>
              {#if imageInputs.length > 1 && false}
                <button type="button" class="remove-btn" onclick={() => removeImageInput(inputId)}>
                  Remove
                </button>
              {/if}
            </div>
          </div>
          {#if uploadedFiles[inputId]}
            <div class="uploaded-file-info">
              <span class="file-name">{uploadedFiles[inputId]?.name}</span>
              <button 
                type="button" 
                class="remove-file-btn" 
                onclick={() => removeUploadedFile(inputId)}
                title="Remove uploaded file"
              >
                ×
              </button>
            </div>
          {:else}
            <p class="upload-default-text">Upload supported file (Max {maxFileSize / (1024 * 1024)}MB)</p>
          {/if}
        {/each}
          
        {#if imageInputs.length < maxInputs}
          <p class="text-center">
            <button type="button" class="btn add-btn" onclick={addImageInput}>
              + Upload Another Image
            </button>
          </p>
        {/if}
        
        {#if imageInputs.length >= maxInputs}
          <p class="max-images-note text-center">Maximum of {maxInputs} images allowed</p>
        {/if}
      </fieldset>
      <p class="text-center">
        <button type="submit" class="btn btn-lg">Submit</button>
      </p>
    </form>
  </div>
</section>

<Toaster position="top-right" />


<style>
  #contact {
    /* background-color: hsl(var(--primary-color) / 0.4); */
    background-color: hsl(var(--background-color) / 0.4);
    .inner {
      width: min(100%, 675px);
      padding: 2rem;
      margin: 0 auto;
      p {
        margin: 0;
        &.text-phone {
          text-shadow: 1px 1px 1px #fff, 0 0  #fff;
        }
      }
      form {
        background-color: #fff;
        border: 1.5rem solid hsl(var(--primary-color));
        text-align: left;
        padding-top: 1.5rem;
        padding-bottom: 3rem;
        fieldset {
          max-width: 425px;
          margin: 0 auto;
          border: none;
          legend {
            width: 100%;
            font-size: 3rem;
            text-transform: uppercase;
          }
        }
        
        .images-upload {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          margin-bottom: 0;
          text-align: center;
          .image-input-group {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-bottom: 0.5rem;
            
            .form-input {
              flex: 1;
              margin: 0;
            }
            
            .remove-btn {
              background-color: #dc3545;
              color: white;
              border: none;
              padding: 0.25rem 0.5rem;
              border-radius: 4px;
              cursor: pointer;
              font-size: 0.875rem;
              
              &:hover {
                background-color: #c82333;
              }
            }
          }
          
        }
        .upload-default-text {
          color: hsl(var(--primary-color));
          font-size: 0.75rem;
          text-align: center;
          line-height: 1;
          margin-bottom: 1.5rem;
        }
        .uploaded-file-info {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem;
          background-color: #f8f9fa;
          border: 1px solid #dee2e6;
          border-radius: 4px;
          margin-top: 0.5rem;
          font-size: 0.8rem;
          margin-bottom: 1.5rem;
          
          .file-name {
            flex: 1;
            color: #495057;
            word-break: break-all;
          }
          
          .remove-file-btn {
            background-color: var(--color-error);
            color: white;
            border: none;
            border-radius: 50%;
            width: 1.25rem;
            height: 1.25rem;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            
            &:hover {
              background-color: #c82333;
            }
          }
        }
        
        .file-upload-btn {
          display: inline-block;
          text-align: center;
          text-decoration: none;
          margin: 0;
          
          &:hover {
            opacity: 0.9;
          }
        }
        
        .max-images-note {
          font-style: italic;
          color: #666;
          font-size: 0.875rem;
          margin-top: 0.5rem;
        }
      }
    }
  }
</style>