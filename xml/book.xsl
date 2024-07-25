<html xsl:version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <head>
        <title>External XML Example</title>
        <style>
  body{
    margin:10px
  }
    *{
      margin:0;
      padding:0;
    }
    .books{
      display:flex;
      gap:10px;
    }
    .book {
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 1.5rem;
    color: #4a5568;
    background-color: #ffffff;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    border-radius: 0.75rem;
    width: 24rem;
  }
  .book:hover{
    cursor:pointer;
    opacity:0.8;
  }

  .image {
    position: relative;
    height: 14rem;
    margin: 0.75rem;
    overflow: hidden;
  }

  .image img {
    width: 100%;
    height: 230px;
    object-fit: cover;
    border-radius:12px;
  }

  .content {
    padding: 0 1rem 1rem 1rem  ;
  }

  .content h5 {
    margin-bottom: 0.5rem;
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1.5;
    color: #1a202c;
  }

  .content p {
    margin: 0;
    font-size: 1rem;
    line-height: 1.5;
  }
        </style>
    </head>
    <body>
        <xsl:variable name="externalData" select="document('book.xml')"/>
        <div class="books">
            <xsl:for-each select="$externalData/bookstore/book">
                <div class="book">
                    <div class="image">
                        <img src="{image}" alt="auth" />
                    </div>
                    <div class="content">
                        <h5>
                            <xsl:value-of select="title"/>
                        </h5>
                        <p>
                            <xsl:value-of select="author"/>
                        </p>
                        <p>
                            <xsl:value-of select="@category"/>
                        </p>
                    </div>
                </div>
            </xsl:for-each>
        </div>

    </body>
</html>