package kr.hs.dgsw.shopping_back.Controller;

import kr.hs.dgsw.shopping_back.Service.AttachService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.net.URLConnection;
import java.util.HashMap;

@RestController
public class AttachmentController {

    @Autowired
    AttachService attachService;

    @GetMapping("/api/image/{id}")
    public void image(@PathVariable Long id, HttpServletResponse response) {
        try {
            HashMap map = attachService.findById(id);
            String filename = (String)map.get("filename");
            String filepath = (String)map.get("filepath");

            File file = new File(filepath);
            if(! file.exists()) return;

            String mimeType = URLConnection.guessContentTypeFromName(filepath);
            if(mimeType == null) mimeType = "application/octet-stream";

            response.setContentType(mimeType);
            response.setHeader("Content-Disposition", "inline; filename='" + filename + "'");
            response.setContentLength((int)file.length());

            InputStream is = new BufferedInputStream(new FileInputStream(file));
            FileCopyUtils.copy(is, response.getOutputStream());
        } catch (Exception ex) {
            final Logger logger = LoggerFactory.getLogger(this.getClass().getSimpleName());
            logger.warn(ex.getLocalizedMessage());
        }

    }
}