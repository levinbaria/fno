jQuery(document).ready(function($) {
    let mediaUploader;

    // Function to initialize media uploader
    function initializeMediaUploader() {
        if (mediaUploader) {
            mediaUploader.open();
            return;
        }

        mediaUploader = wp.media({
            title: 'Upload Logo',
            button: { text: 'Use this Logo' },
            multiple: false
        });

        mediaUploader.on('select', function() {
            const attachment = mediaUploader.state().get('selection').first().toJSON();
            $('#fno_theme_logo').val(attachment.url);
            $('#logo_preview').html('<img src="' + attachment.url + '" style="max-width:100px; height:100px;">');
            toggleLogoButtons(true);
        });

        mediaUploader.open();
    }

    // Click event handler for upload/replacement button
    $('#upload_logo_button').click(function(e) {
        e.preventDefault();
        initializeMediaUploader();
    });

    // Click event handler for remove button
    $('#remove_logo_button').click(function(e) {
        e.preventDefault();
        $('#fno_theme_logo').val('');
        $('#logo_preview').html('');
        toggleLogoButtons(false);
    });

    // Function to toggle logo buttons based on logo presence
    function toggleLogoButtons(hasLogo) {
        if (hasLogo) {
            $('#upload_logo_button').hide();
            $('#remove_logo_button').show();
        } else {
            $('#upload_logo_button').show();
            $('#remove_logo_button').hide();
        }
    }

    // Initial button visibility based on logo presence
    toggleLogoButtons($('#fno_theme_logo').val() !== '');
});
